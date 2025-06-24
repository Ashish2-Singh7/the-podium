import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'; // For ObjectId validation
import { connectToDB } from '@/lib/db';
import Article from '@/model/article.model';


interface JwtPayload {
    userId: string;
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await connectToDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ error: 'Invalid article ID format.' }, { status: 400 });
    }

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        return NextResponse.json({ error: 'Unauthorized: No session token found.' }, { status: 401 });
    }

    const token = jwtCookie.value;
    let currentUserId: mongoose.Types.ObjectId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        currentUserId = new mongoose.Types.ObjectId(decoded.userId);
    } catch (error: any) {
        console.error('JWT verification failed for delete:', error);
        let errorMessage = 'Unauthorized: Invalid token.';
        if (error.name === 'TokenExpiredError') {
            errorMessage = 'Unauthorized: Session expired.';
        }
        return NextResponse.json({ error: errorMessage }, { status: 401 });
    }

    try {
        const articleToDelete = await Article.findById(id).select('userId');

        if (!articleToDelete) {
            return NextResponse.json({ error: 'Article not found.' }, { status: 404 });
        }

        if (!articleToDelete.userId || !articleToDelete.userId.equals(currentUserId)) {
            return NextResponse.json({ error: 'Forbidden: You are not authorized to delete this article.' }, { status: 403 });
        }

        await Article.findByIdAndDelete(id);

        return NextResponse.json({ message: 'Article deleted successfully.' }, { status: 200 });

    } catch (error: any) {
        console.error('Error deleting article:', error);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
