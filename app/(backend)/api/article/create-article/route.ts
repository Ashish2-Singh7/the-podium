import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/db';
import { uploadFeaturedImageToCloudinary } from '@/app/(backend)/_services/media.service';
import Article from '@/model/article.model';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import User from '@/model/user.model';


interface JwtPayload {
    userId: string;
}

export async function POST(req: NextRequest) {

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        return NextResponse.json({ error: 'Unauthorized: No session token found' }, { status: 401 });
    }

    const token = jwtCookie.value;
    let userId: string;

    await connectToDB();

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        userId = decoded.userId; // This is your user ID!

        const checkUser = await User.findOne({ _id: userId });

        if (!checkUser) {
            return NextResponse.json({ error: "Invalid or expired token. Please log in again." }, { status: 401 });
        }

        const body = await req.json(); // Expecting JSON body as base64 string is part of it

        const {
            title,
            subtitle,
            content,
            category,
            tags, // Expected as a single string, e.g., "tech, webdev, javascript"
            featuredImage // Expected as a base64 string, e.g., "data:image/jpeg;base64,..."
        } = body;


        const checkArticle = await Article.findOne({ title });

        if (checkArticle) {
            return NextResponse.json({ error: "An article already exists with the same title. Please make it unique" }, { status: 400 });
        }

        if (!title || typeof title !== 'string' || title.trim() === '') {
            return NextResponse.json({ error: "Article title is required." }, { status: 400 });
        }

        if (!content || typeof content !== 'string' || content.trim() === '') {
            return NextResponse.json({ error: 'Article content is required.' }, { status: 400 });
        } else {
            const contentWordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
            if (contentWordCount < 50) {
                return NextResponse.json({ error: `Article content must be at least 50 words long. Current: ${contentWordCount} words.` }, { status: 400 });
            }
        }

        if (category && typeof category !== 'string') {
            return NextResponse.json({ error: 'Category must be a string if provided.' }, { status: 400 });
        }


        let featuredImageUrl: string = '';

        // Image Upload to Cloudinary (if featuredImage base64 string is provided)
        if (featuredImage) {
            featuredImageUrl = await uploadFeaturedImageToCloudinary(featuredImage, 'the_podium/articles');
        }

        // Process tags: Convert comma-separated string to an array
        const articleTags = tags && typeof tags === 'string'
            ? tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
            : [];

        // Generate slug from title
        const slug = title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric chars except spaces/hyphens
            .replace(/\s+/g, '-')         // Replace spaces with hyphens
            .replace(/-+/g, '-');         // Replace multiple hyphens with single

        // Ensure slug is unique
        let uniqueSlug = slug;
        let slugSuffix = 1;
        while (await Article.findOne({ slug: uniqueSlug })) {
            uniqueSlug = `${slug}-${slugSuffix++}`;
        }

        // Create the new article in MongoDB
        const newArticle = await Article.create({
            userId,
            title: title.trim(),
            subtitle: subtitle ? subtitle.trim() : undefined, // Store undefined if empty
            content: content.trim(),
            category: category ? category.trim() : undefined, // Store undefined if empty
            tags: articleTags,
            featuredImage: featuredImageUrl, // Save the Cloudinary URL
            slug: slug
        });


        return NextResponse.json({
            message: 'Article created successfully!',
            article: newArticle
        }, { status: 201 });

    } catch (error: any) {
        console.error('Error creating article:', error);
        return NextResponse.json({
            error: 'Internal server error',
            errorMessage: error.message
        }, { status: 500 });
    }
}
