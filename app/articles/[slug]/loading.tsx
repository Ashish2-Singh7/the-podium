export default function ArticleLoading() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button Skeleton */}
                <div className="mb-8 animate-pulse">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                        <div className="h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                    </div>
                </div>

                {/* Article Header Skeleton */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-8 animate-pulse">
                    {/* Featured Image Skeleton */}
                    <div className="w-full h-64 md:h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]"></div>

                    <div className="p-8 md:p-12">
                        {/* Category and Views Skeleton */}
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-6 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded-full w-24"></div>
                            <div className="flex items-center space-x-1">
                                <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-16"></div>
                            </div>
                        </div>

                        {/* Title Skeleton */}
                        <div className="space-y-3 mb-6">
                            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                        </div>

                        {/* Author and Meta Info Skeleton */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <div className="flex items-center space-x-6 mb-4 md:mb-0">
                                <div className="flex items-center space-x-2">
                                    <div className="w-5 h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-24"></div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-16"></div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="h-10 bg-gradient-to-r from-red-200 via-red-300 to-red-200 dark:from-red-800 dark:via-red-700 dark:to-red-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-20"></div>
                                <div className="h-10 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-16"></div>
                            </div>
                        </div>

                        {/* Tags Skeleton */}
                        <div className="flex flex-wrap gap-2">
                            {[1, 2, 3, 4, 5].map((tag) => (
                                <div key={tag} className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-full w-20"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content Skeleton */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 mb-8 animate-pulse">
                    <div className="space-y-6">
                        {/* Paragraph Skeletons */}
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((paragraph) => (
                            <div key={paragraph} className="space-y-3">
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-4/5"></div>
                                {paragraph % 3 === 0 && (
                                    <div className="my-6">
                                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-1/2 mb-3"></div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Quote Skeleton */}
                        <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg border-l-4 border-blue-500">
                            <div className="space-y-2">
                                <div className="h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                <div className="h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                            </div>
                        </div>

                        {/* More Paragraphs */}
                        {[9, 10, 11, 12].map((paragraph) => (
                            <div key={paragraph} className="space-y-3">
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-2/3"></div>
                            </div>
                        ))}
                    </div>

                    {/* Like/Dislike Section Skeleton */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                                <div className="flex items-center space-x-2">
                                    <div className="h-10 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-20"></div>
                                    <div className="h-10 bg-gradient-to-r from-red-200 via-red-300 to-red-200 dark:from-red-800 dark:via-red-700 dark:to-red-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-20"></div>
                                </div>
                            </div>
                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-48"></div>
                        </div>
                    </div>
                </div>

                {/* Related Articles Skeleton */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 animate-pulse">
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-40"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((article) => (
                            <div key={article} className="space-y-4">
                                <div className="w-full h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg"></div>
                                <div className="space-y-2">
                                    <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                    <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-16"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}