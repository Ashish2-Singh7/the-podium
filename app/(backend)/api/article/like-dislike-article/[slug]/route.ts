import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { connectToDB } from '@/lib/db';
import Article from '@/model/article.model';
import mongoose from 'mongoose';


interface JwtPayload {
    userId: string;
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    await connectToDB();

    const { slug } = await params;

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        return NextResponse.json({ message: 'Unauthorized: No session token found' }, { status: 401 });
    }

    const token = jwtCookie.value;
    let currentUserId: string;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        currentUserId = decoded.userId;
    } catch (error: any) {
        console.error('Error verifying JWT for like/dislike:', error);
        let message = 'Unauthorized: Invalid token';
        if (error.name === 'TokenExpiredError') {
            message = 'Unauthorized: Session expired';
        }
        return NextResponse.json({ message: message }, { status: 401 });
    }

    const { userAction } = await req.json(); // Expected: 'like', 'dislike', or 'null'
    if (!['like', 'dislike', 'null'].includes(userAction)) {
        return NextResponse.json({ message: 'Invalid userAction provided. Must be "like", "dislike", or "null".' }, { status: 400 });
    }

    try {
        // --- 3. Find the Article to get its current state ---
        // We need the current state of likes/dislikes to form the correct update operation
        const article = await Article.findOne({ slug });

        if (!article) {
            return NextResponse.json({ message: 'Article not found' }, { status: 404 });
        }

        // Convert currentUserId to ObjectId for comparison
        const userIdObjectId = new mongoose.Types.ObjectId(currentUserId);

        // Determine current user's reaction status
        const hasLiked = article.likes.some(id => id.equals(userIdObjectId));
        const hasDisliked = article.dislikes.some(id => id.equals(userIdObjectId));

        const updateOperation: { [key: string]: any } = {}; // Initialize empty update operation
        let responseMessage: string = 'No change.';

        if (userAction === 'like') {
            if (hasLiked) {
                // User already liked, so undo the like
                updateOperation.$pull = { likes: userIdObjectId };
                responseMessage = 'Article unliked.';
            } else {
                // User wants to like
                updateOperation.$addToSet = { likes: userIdObjectId };
                responseMessage = 'Article liked.';
                // If they previously disliked, remove that dislike
                if (hasDisliked) {
                    updateOperation.$pull = { ...(updateOperation.$pull || {}), dislikes: userIdObjectId };
                }
            }
        } else if (userAction === 'dislike') {
            if (hasDisliked) {
                // User already disliked, so undo the dislike
                updateOperation.$pull = { dislikes: userIdObjectId };
                responseMessage = 'Article undisliked.';
            } else {
                // User wants to dislike
                updateOperation.$addToSet = { dislikes: userIdObjectId };
                responseMessage = 'Article disliked.';
                // If they previously liked, remove that like
                if (hasLiked) {
                    updateOperation.$pull = { ...(updateOperation.$pull || {}), likes: userIdObjectId };
                }
            }
        } else { // userAction === 'null' (Explicitly undo/clear any reaction)
            if (hasLiked || hasDisliked) {
                updateOperation.$pull = {
                    likes: userIdObjectId,
                    dislikes: userIdObjectId,
                };
                responseMessage = 'Article reaction removed.';
            } else {
                // No reaction to remove
                return NextResponse.json({ message: 'No reaction to remove.' }, { status: 200 });
            }
        }

        // If no update operation was generated (e.g., user clicked like but already liked)
        if (Object.keys(updateOperation).length === 0) {
            return NextResponse.json({
                message: 'No change in reaction.',
                likesCount: article.likes.length,
                dislikesCount: article.dislikes.length,
            }, { status: 200 });
        }

        // --- 5. Perform Atomic Update ---
        const updatedArticle = await Article.findOneAndUpdate(
            { slug: slug },
            updateOperation,
            { new: true } // Return the modified document rather than the original
        ).populate({
            path: 'userId',
            select: 'username'
        });

        if (!updatedArticle) {
            // This case implies article was deleted between findOne and findOneAndUpdate, or another race condition
            return NextResponse.json({ message: 'Failed to update article reaction: Article disappeared' }, { status: 500 });
        }

        // --- 6. Return Updated Counts ---
        return NextResponse.json({
            message: responseMessage,
            likesCount: updatedArticle.likes.length,
            dislikesCount: updatedArticle.dislikes.length,
        }, { status: 200 });

    } catch (error: any) {
        console.error('Error processing article reaction:', error);
        return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
    }
}
