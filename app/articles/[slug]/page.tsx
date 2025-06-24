import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, TrendingUp } from 'lucide-react';
import LikeDislikeButtons from '@/components/LikeDislikeButton';
import Article from '@/model/article.model';
import markdownit from 'markdown-it';
import { calculateReadingTime, formatMonthYear } from '@/utils/formatDate';
import { connectToDB } from '@/lib/db';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose';
import ArticleActions from '@/components/ArticleActions';

const md = markdownit();
interface JwtPayload {
    userId: string;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const relatedArticles = [
        {
            id: 2,
            title: 'React 18: What\'s New and How to Upgrade',
            author: 'Sarah Johnson',
            readTime: '6 min read',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            title: 'TypeScript Best Practices for 2024',
            author: 'Mike Chen',
            readTime: '5 min read',
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 4,
            title: 'Building Performant Web Apps with Next.js',
            author: 'Emma Rodriguez',
            readTime: '7 min read',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ];


    const { slug } = await params;
    await connectToDB()
    const article = await Article.findOne({ slug }).populate({
        path: 'userId',
        select: "username"
    });

    if (!article) {
        return notFound();
    }

    const cookieStore = await cookies();
    const jwtCookie = cookieStore.get('jwt'); // Get the 'jwt' cookie
    let currentUserId: mongoose.Types.ObjectId | null = null;
    let currentUserInitialReaction: 'like' | 'dislike' | null = null;
    let isAuthor = false;

    if (jwtCookie) {
        try {
            const decoded = jwt.verify(jwtCookie.value, process.env.JWT_SECRET_KEY as string) as JwtPayload;
            currentUserId = new mongoose.Types.ObjectId(decoded.userId); // Convert string ID to ObjectId for comparison

            // Check if current user is the author
            if (article.userId && article.userId.equals(currentUserId)) {
                isAuthor = true;
            }

            const hasLiked = article.likes.some((viewerId: mongoose.Types.ObjectId) =>
                viewerId.equals(currentUserId!)
            );

            const hasDisliked = article.dislikes.some((viewerId: mongoose.Types.ObjectId) =>
                viewerId.equals(currentUserId!)
            );

            if (hasLiked) {
                currentUserInitialReaction = 'like';
            } else if (hasDisliked) {
                currentUserInitialReaction = 'dislike';
            }

        } catch (error) {
            console.error('Error verifying JWT for reaction check:', error);
            currentUserId = null;
        }
    }

    try {
        article.views += 1;
        await article.save();
    } catch (saveError) {
        console.error('Error incrementing article views on server:', saveError);
    }

    const parsedContent = md.render(article?.content || '');

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <Link
                    href="/articles"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Articles</span>
                </Link>

                {/* Article Header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-8">
                    <img
                        src={article?.featuredImage}
                        alt={article?.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="p-8 md:p-12">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                                    {article?.category}
                                </span>
                                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>{article?.views} views</span>
                                </div>
                            </div>
                            {isAuthor && (
                                <div className='relative'>
                                    <ArticleActions
                                        articleId={article._id.toString()}
                                    />
                                </div>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight font-playfair">
                            {article?.title}
                        </h1>
                        <h1 className="text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-500 mb-6 leading-tight">
                            {article?.subtitle}
                        </h1>
                        {/* NEW: Render ArticleActions component only if current user is the author */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <div className="flex space-x-6 mb-4 md:mb-0 flex-col sm:flex-row sm:items-center">
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <span className="font-medium text-gray-900 dark:text-white">{article?.userId?.username}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatMonthYear(article?.createdAt)}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    <span>{calculateReadingTime(parsedContent)}</span>
                                </div>
                            </div>
                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 mb-8">
                    <article
                        className="prose prose-lg max-w-none dark:prose-dark dark:prose-invert prose-img:p-2 prose-img:w-full prose-img:object-cover prose-img:h-64 prose-img:rounded-2xl"
                        dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />

                    {/* Like/Dislike Buttons */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <LikeDislikeButtons loggedIn={!!jwtCookie} slug={slug} userActionInitial={currentUserInitialReaction} likesNumber={article?.likes.length} dislikesNumber={article?.dislikes.length} />
                    </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="flex items-center space-x-2 mb-8">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Related Articles</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((relatedArticle) => (
                            <Link
                                key={relatedArticle.id}
                                href={`/articles/${relatedArticle.id}`}
                                className="group"
                            >
                                <img
                                    src={relatedArticle.image}
                                    alt={relatedArticle.title}
                                    className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200 mb-2 leading-tight">
                                    {relatedArticle.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>{relatedArticle.author}</span>
                                    <span>{relatedArticle.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}