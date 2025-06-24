// components/SearchArticles/ArticleSectionSkeleton.tsx
import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden animate-pulse">
            <div className="relative">
                <div className="h-48 w-full bg-gray-300 dark:bg-gray-700"></div>
            </div>
            <div className="p-6 space-y-4">
                <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded-md" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded-md" />
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-600 rounded-md" />
                <div className="flex justify-between mt-4">
                    <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded-md" />
                    <div className="h-4 w-1/5 bg-gray-300 dark:bg-gray-700 rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default function ArticleSectionSkeleton() {
    return (
        <div className="mb-12">
            {/* Heading */}
            <div>
                <div className="flex items-center space-x-3 mb-8">
                    <div className="h-6 w-1/12 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
                </div>
                <div className="flex items-center space-x-3 mb-8">
                    <div className="h-10 w-1/12 bg-gray-300 dark:bg-gray-700 rounded-4xl animate-pulse" />
                    <div className="h-10 w-1/12 bg-gray-300 dark:bg-gray-700 rounded-4xl animate-pulse" />
                    <div className="h-10 w-1/12 bg-gray-300 dark:bg-gray-700 rounded-4xl animate-pulse" />
                </div>
            </div>
            <div className="flex items-center space-x-3 mb-8">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
                <div className="h-6 w-1/4 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
            </div>

            {/* Skeleton Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 3 }).map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </div>
    );
}
