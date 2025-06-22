// app/api/user-details/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { connectToDB } from '@/lib/db';
import User from '@/model/user.model';

interface JwtPayload {
    userId: string;
}

export async function GET(req: NextRequest) {

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        return NextResponse.json({ message: 'Unauthorized: No token provided' }, { status: 401 });
    }

    const token = jwtCookie.value;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;

        await connectToDB();
        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Return the user details
        return NextResponse.json({ user }, { status: 200 });

    } catch (error: any) {
        console.error('Error verifying JWT or fetching user:', error);
        // Handle specific JWT errors (e.g., TokenExpiredError, JsonWebTokenError)
        if (error.name === 'TokenExpiredError') {
            return NextResponse.json({ message: 'Unauthorized: Token expired' }, { status: 401 });
        }
        if (error.name === 'JsonWebTokenError') {
            return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 });
        }
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}