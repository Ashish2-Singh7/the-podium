import ArticlesSearchResultsSection from '@/components/SearchArticles/ArticlesSearchResultsSection';
import LatestArticles from '@/components/SearchArticles/LatestArticles';
import SearchForm from '@/components/SearchArticles/SearchForm';
import ArticleSectionSkeleton from '@/components/skeleton/ArticleSectionSkeleton';
import { Suspense } from 'react';


export default async function Articles({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;

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

                <Suspense fallback={<ArticleSectionSkeleton />}>
                    <ArticlesSearchResultsSection query={query} />
                </Suspense>

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