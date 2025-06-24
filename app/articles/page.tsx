import ArticlesSection from '@/components/SearchArticles/ArticlesSection';
import LatestArticles from '@/components/SearchArticles/LatestArticles';
import SearchForm from '@/components/SearchArticles/SearchForm';
import { connectToDB } from '@/lib/db';
import Article from '@/model/article.model';

interface IClientArticle {
    _id: string; // Changed to string
    title: string;
    subtitle?: string;
    content: string;
    category?: string;
    tags?: string[];
    featuredImage?: string;
    views: number;
    createdAt: string; // Changed to string (ISO date string)
    updatedAt: string; // Changed to string (ISO date string)
    slug: string;
    likes: string[]; // Array of user IDs (strings) who liked
    dislikes: string[]; // Array of user IDs (strings) who disliked
    userId: string; // Changed to string (author's ID)
    // If you populate userId in server component with username, you'd need:
    // userId: { _id: string; username: string; };
    // For simplicity, let's assume userId is just the ID string here.
}
// Define the type for the categorized articles object
interface ICategorizedArticles {
    [category: string]: IClientArticle[];
}

export default async function Articles({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    await connectToDB();
    const query = (await searchParams).query;

    // if (typeof console !== 'undefined' && typeof console.log === 'function') {
    //     console.log("Search Query:", query);
    // }

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

    let loadingFinished = false;
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
        } finally {
            loadingFinished = true;
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
        } finally {
            loadingFinished = true;
        }
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
                        Explore Articles
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Discover insights, stories, and knowledge from our community of writers
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <SearchForm query={query} />
                </div>

                <ArticlesSection mostViewedArticles={mostViewedArticles} categorizedArticles={categorizedArticles} articlesToDisplay={articlesToDisplay} loading={loadingFinished} />

                {/* All Articles */}
                <div>
                    <LatestArticles />
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium">
                        Load More Articles
                    </button>
                </div>
            </div>
        </div>
    );
}