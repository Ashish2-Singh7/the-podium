"use client";
import { TrendingUp } from 'lucide-react';
import React, { useState } from 'react'
import ArticleCard from './ArticleCard';
import ArticleSectionSkeleton from '../skeleton/ArticleSectionSkeleton';

const ArticlesSection = ({ categorizedArticles, articlesToDisplay, mostViewedArticles, loading }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const isEmpty = loading && !articlesToDisplay.length && !mostViewedArticles.length;

    if (!loading) return <ArticleSectionSkeleton />;

    if (isEmpty) {
        return (
            <div className="text-center py-24">
                <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">No articles found</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or category filters.</p>
            </div>
        );
    }
    return (
        <>
            <div>
                {/* Categories */}
                {Object.keys(categorizedArticles).length !== 0 && <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Browse by Category</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {['all', ...Object.keys(categorizedArticles)].map((category, index) => (
                            <button
                                key={index == 0 ? `all-${index}` : categorizedArticles[category][0]._id}
                                onClick={() => setSelectedCategory(category)}
                                className={`cursor-pointer px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {index == 0 ? "All articles" : category}({index === 0 ? articlesToDisplay.length : categorizedArticles[category].length})
                            </button>
                        ))}
                    </div>
                </div>
                }
                {/* Editor's Picks */}
                <div className="mb-12">
                    <div className="flex items-center space-x-2 mb-8">
                        <TrendingUp className="w-6 h-6 text-green-500" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Popular Picks</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.keys(categorizedArticles).length === 0 ?
                            mostViewedArticles.map((article) => (
                                <ArticleCard article={article} key={article._id} />
                            ))
                            :
                            (selectedCategory === "all" ? articlesToDisplay.map((article) => (
                                <ArticleCard article={article} key={article._id} />
                            )) : categorizedArticles[selectedCategory]?.map((article) => (
                                <ArticleCard article={article} key={article._id} />
                            )))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArticlesSection;
