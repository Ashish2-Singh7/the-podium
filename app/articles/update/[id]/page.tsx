import { redirect } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import UpdateArticleSection from '@/components/articles/UpdateArticleSection';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Article from '@/model/article.model';

interface JwtPayload {
    userId: string;
}

interface IClientArticle {
    _id: string;
    userId: string; // Changed to string as it will not be populated
    title: string;
    subtitle?: string;
    content: string;
    category?: string;
    tags?: string[];
    featuredImage?: string;
    views: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    slug: string;
    likes: string[]; // Array of user IDs (strings)
    dislikes: string[]; // Array of user IDs (strings)
}

const toClientArticle = (articleDoc: any): IClientArticle => {
    // Ensure it's a plain object, whether it came from .lean() or not
    const obj = articleDoc.toObject ? articleDoc.toObject() : { ...articleDoc };

    return {
        ...obj,
        _id: obj._id.toString(), // Convert ObjectId to string
        userId: obj.userId.toString(), // userId will be a simple ObjectId, convert to string
        createdAt: obj.createdAt.toISOString(), // Convert Date to ISO string
        updatedAt: obj.updatedAt.toISOString(), // Convert Date to ISO string
        likes: obj.likes ? obj.likes.map((id: any) => id.toString()) : [], // Ensure array elements are strings
        dislikes: obj.dislikes ? obj.dislikes.map((id: any) => id.toString()) : [], // Ensure array elements are strings
    };
};

export default async function UpdateArticle({ params }: { params: Promise<{ id: string }> }) {
    const { id: articleId } = await params;

    if (!articleId || !mongoose.Types.ObjectId.isValid(articleId)) {
        redirect('/articles');
    }

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt');

    if (!jwtCookie) {
        redirect("/articles");
    }

    const token = jwtCookie.value;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;

    const currentUserId = new mongoose.Types.ObjectId(decoded.userId);

    const articleDoc = await Article.findById(articleId).select('+userId').lean().exec();

    if (!articleDoc || !articleDoc.userId.equals(currentUserId)) {
        redirect("/articles");
    }

    const articleForClient: IClientArticle = toClientArticle(articleDoc);

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
                            Update your Article
                        </h1>
                    </div>
                    <UpdateArticleSection article={articleForClient} articleId={articleId} />
                </div>
            </div>
        </>
    );
}