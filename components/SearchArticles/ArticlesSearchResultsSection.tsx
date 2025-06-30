import React from 'react';
import Article from '@/model/article.model';
import { connectToDB } from '@/lib/db';
import ArticlesSection from './ArticlesSection';

interface IClientArticle {
    _id: string;
    title: string;
    subtitle?: string;
    content: string;
    category?: string;
    tags?: string[];
    featuredImage?: string;
    views: number;
    createdAt: string;
    updatedAt: string;
    slug: string;
    likes: string[];
    dislikes: string[];
    userId: string;
}

interface ICategorizedArticles {
    [category: string]: IClientArticle[];
}

const ArticlesSearchResultsSection = async ({ query }) => {
    await connectToDB();

    let articlesToDisplay: IClientArticle[] = [];
    let categorizedArticles: ICategorizedArticles = {}; // Initialize for categorized search results
    let mostViewedArticles: IClientArticle[] = [];

    const toClientArticle = (articleDoc: any): IClientArticle => {
        const obj = articleDoc.toObject ? articleDoc.toObject() : articleDoc;
        return {
            ...obj,
            _id: obj._id.toString(),
            userId: JSON.parse(JSON.stringify(obj.userId)),
            createdAt: obj.createdAt.toISOString(),
            updatedAt: obj.updatedAt.toISOString(),
            likes: obj.likes ? obj.likes.map((id: any) => id.toString()) : [],
            dislikes: obj.dislikes ? obj.dislikes.map((id: any) => id.toString()) : [],
        };
    };

    if (query) {
        // --- Search Logic: Query is present ---
        try {
            const searchRegex = new RegExp(query, 'i');

            const searchResults = await Article.find({
                $or: [
                    { title: { $regex: searchRegex } },
                    { subtitle: { $regex: searchRegex } },
                    { content: { $regex: searchRegex } },
                    { category: { $regex: searchRegex } },
                    { tags: { $regex: searchRegex } }
                ]
            })
                .sort({ createdAt: -1 })
                .populate({
                    path: 'userId',
                    select: "username"
                })
                .limit(50)
                .exec()
                ;

            articlesToDisplay = searchResults.map(toClientArticle);

            // Categorize the search results explicitly for the client component
            categorizedArticles = articlesToDisplay.reduce((acc: ICategorizedArticles, article) => {
                const categoryName = article.category && article.category.trim() !== '' ? article.category : 'Uncategorized';
                if (!acc[categoryName]) {
                    acc[categoryName] = [];
                }
                acc[categoryName].push(article);
                return acc;
            }, {});


        } catch (error) {
            if (typeof console !== 'undefined' && typeof console.error === 'function') {
                console.error("Error during article search:", error);
            }
            articlesToDisplay = [];
            categorizedArticles = {}; // Ensure this is empty on error
        }

    } else {
        // --- No Search Query Logic: Show all and most viewed ---
        try {
            const allArticles = await Article.find({})
                .sort({ createdAt: -1 })
                .populate({
                    path: 'userId',
                    select: "username"
                })
                .limit(20)
                .exec();

            const mostViewedRaw = await Article.find({})
                .sort({ views: -1, createdAt: -1 })
                .populate({
                    path: 'userId',
                    select: "username"
                })
                .limit(3)
                .exec();

            articlesToDisplay = allArticles.map(toClientArticle);
            mostViewedArticles = mostViewedRaw.map(toClientArticle);

        } catch (error) {
            if (typeof console !== 'undefined' && typeof console.error === 'function') {
                console.error("Error fetching articles or most viewed:", error);
            }
            articlesToDisplay = [];
            mostViewedArticles = [];
        }
    }


    return (
        <div>
            <ArticlesSection mostViewedArticles={mostViewedArticles} categorizedArticles={categorizedArticles} articlesToDisplay={articlesToDisplay} />
        </div>
    )
} 

export default ArticlesSearchResultsSection;
