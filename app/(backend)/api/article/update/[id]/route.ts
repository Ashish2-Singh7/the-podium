import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose'; // For ObjectId comparison
import { connectToDB } from '@/lib/db';
import Article from '@/model/article.model';
import { uploadFeaturedImageToCloudinary } from '@/app/(backend)/_services/media.service';

interface JwtPayload {
    userId: string;
}

async function authorizeArticleAccess(req: NextRequest, articleId: string): Promise<{ authorized: boolean; currentUserId?: mongoose.Types.ObjectId; article?: any; response?: NextResponse }> {
    await connectToDB();

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        return { authorized: false, response: NextResponse.json({ error: 'Unauthorized: No session token found' }, { status: 401 }) };
    }

    const token = jwtCookie.value;
    let currentUserId: mongoose.Types.ObjectId;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        currentUserId = new mongoose.Types.ObjectId(decoded.userId);
    } catch (error: any) {
        console.error('JWT verification failed:', error);
        let message = 'Unauthorized: Invalid token';
        if (error.name === 'TokenExpiredError') {
            message = 'Unauthorized: Session expired';
        }
        return { authorized: false, response: NextResponse.json({ error: message }, { status: 401 }) };
    }
    
    if (!mongoose.Types.ObjectId.isValid(articleId)) {
        return { authorized: false, response: NextResponse.json({ error: 'Invalid article ID.' }, { status: 400 }) };
    }

    const article = await Article.findById(articleId).select('+userId'); // Select userId to compare
    if (!article) {
        return { authorized: false, response: NextResponse.json({ error: 'Article not found' }, { status: 404 }) };
    }

    // Ensure article.userId is populated or directly accessed if it's an ObjectId reference
    if (!article.userId || !article.userId.equals(currentUserId)) {
        return { authorized: false, response: NextResponse.json({ error: 'Forbidden: You are not the author of this article.' }, { status: 403 }) };
    }

    return { authorized: true, currentUserId, article };
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Authorize access
    const { authorized, article, response } = await authorizeArticleAccess(req, id);
    if (!authorized) {
        return response!;
    }

    const articleData = article.toObject();
    if (articleData.userId && typeof articleData.userId === 'object' && articleData.userId._id) {
        // If userId was populated into an object, ensure we send its _id as a string
        articleData.userId = articleData.userId._id.toString();
    } else if (articleData.userId) {
        // If userId is just an ObjectId, convert it to string
        articleData.userId = articleData.userId.toString();
    }


    return NextResponse.json({
        message: 'Article details fetched successfully.',
        article: articleData
    }, { status: 200 });
}


export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Authorize access
    const { authorized, article: originalArticle, response } = await authorizeArticleAccess(req, id);
    if (!authorized) {
        return response!; // Return the error response from authorization
    }

    const body = await req.json();
    const {
        title,
        subtitle,
        content,
        category,
        tags, // Expected as a single string, e.g., "tech, webdev, javascript"
        featuredImage // Expected as a base64 string, e.g., "data:image/jpeg;base64,..."
    } = body;

    let slugUpdate: string | undefined;

    if (typeof title === 'string') {
        if (title.trim() === '') {
            return NextResponse.json({ error: "Article title is required." }, { status: 400 });
        } else if (title.trim() !== originalArticle.title) { // ONLY check uniqueness if title has changed
            const existingArticleWithTitle = await Article.findOne({ title: title.trim() });
            if (existingArticleWithTitle && existingArticleWithTitle._id.toString() !== id) {
                return NextResponse.json({ error: "An article already exists with this title. Please make it unique." }, { status: 400 });
            }
            const newSlug = title
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars except spaces/hyphens
                .replace(/\s+/g, '-')         // Replace spaces with hyphens
                .replace(/-+/g, '-');         // Replace multiple hyphens with single

            // Ensure slug is unique
            slugUpdate = newSlug;
            let slugSuffix = 1;
            while (await Article.findOne({ slug: slugUpdate })) {
                slugUpdate = `${newSlug}-${slugSuffix++}`;
            }
        }
    } else if (title !== undefined) { // If title is provided but not a string
        return NextResponse.json({ error: 'Title must be a string.' }, { status: 400 });
    }

    // Content validation: Must be present if sent and at least 50 words long
    if (typeof content === 'string' && content.trim() === '') {
        return NextResponse.json({ error: 'Article content is required.' }, { status: 400 });
    } else if (typeof content === 'string') {
        const contentWordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
        if (contentWordCount < 50) {
            return NextResponse.json({ error: `Article content must be at least 50 words long. Current: ${contentWordCount} words.` }, { status: 400 });
        }
    } else if (content !== undefined) { // If content is provided but not a string
        return NextResponse.json({ error: 'Content must be a string.' }, { status: 400 });
    }

    // Category validation: If provided, must be a string
    if (category && typeof category !== 'string') {
        return NextResponse.json({ error: 'Category must be a string if provided.' }, { status: 400 });
    }

    let featuredImageUrl: string | undefined = undefined;


    if (featuredImage !== undefined) {
        if (typeof featuredImage === 'string') {
            if (featuredImage.startsWith('data:image')) {
                featuredImageUrl = await uploadFeaturedImageToCloudinary(featuredImage, 'the_podium/articles');

            } else if (featuredImage.startsWith('http://') || featuredImage.startsWith('https://')) {
                featuredImageUrl = featuredImage;
            } else if (featuredImage === '') {
                featuredImageUrl = '';
            } else {
                return NextResponse.json({ error: 'Invalid format for featuredImage.' }, { status: 400 });
            }
        } else {
            return NextResponse.json({ error: 'Invalid type for featuredImage.' }, { status: 400 });
        }
    }

    // Process tags: Convert comma-separated string to an array
    const articleTags = tags && typeof tags === 'string'
        ? tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
        : undefined;

    // Prepare update fields dynamically
    const updateFields: { [key: string]: any } = {};
    if (title !== undefined) updateFields.title = title.trim();
    if (subtitle !== undefined) updateFields.subtitle = subtitle.trim();
    if (content !== undefined) updateFields.content = content.trim();
    if (category !== undefined) updateFields.category = category.trim();
    if (articleTags !== undefined) updateFields.tags = articleTags; // Use processed tags
    if (featuredImageUrl !== undefined) updateFields.featuredImage = featuredImageUrl; // Use processed image 
    if (slugUpdate !== undefined) updateFields.slug = slugUpdate; // Use processed image 

    if (Object.keys(updateFields).length === 0) {
        return NextResponse.json({ error: 'No fields provided for update.' }, { status: 400 });
    }

    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            id, // Article ID from params
            { $set: updateFields }, // Use $set to update specific fields
            { new: true, runValidators: true } // Return updated doc, run schema validators
        );

        if (!updatedArticle) {
            return NextResponse.json({ error: 'Article not found for update (race condition)' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'Article updated successfully!',
            article: updatedArticle
        }, { status: 200 });

    } catch (error: any) {
        console.error('Error updating article:', error);

        if (error.name === 'ValidationError') {
            const validationErrors: { [key: string]: string } = {};
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
            return NextResponse.json({
                error: 'Mongoose validation failed',
                errors: validationErrors
            }, { status: 400 });
        }
        if (error.code === 11000) { // Duplicate key error (e.g., unique title)
            return NextResponse.json({
                error: 'Duplicate entry: An article with this title already exists.',
                field: Object.keys(error.keyValue)[0]
            }, { status: 409 });
        }

        return NextResponse.json({
            error: 'Internal server error',
            errorMessage: error.message
        }, { status: 500 });
    }
}
