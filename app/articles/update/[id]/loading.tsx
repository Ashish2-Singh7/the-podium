export default function UpdateUiSkeleton() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Skeleton */}
                <div className="text-center mb-12 animate-pulse">
                    <div className="space-y-4">
                        <div className="h-12 md:h-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg w-80 mx-auto"></div>
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-96 mx-auto"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Editor Skeleton */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 animate-pulse">
                            {/* Editor Toolbar Skeleton */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800 animate-shimmer bg-[length:200%_100%] rounded-lg">
                                        <div className="w-4 h-4 bg-white/50 dark:bg-gray-900/50 rounded"></div>
                                        <div className="w-12 h-4 bg-white/50 dark:bg-gray-900/50 rounded"></div>
                                    </div>
                                    <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg">
                                        <div className="w-4 h-4 bg-white/50 dark:bg-gray-900/50 rounded"></div>
                                        <div className="w-16 h-4 bg-white/50 dark:bg-gray-900/50 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg w-24"></div>
                                    <div className="h-8 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-20"></div>
                                </div>
                            </div>

                            {/* Title Input Skeleton */}
                            <div className="mb-6">
                                <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                            </div>

                            {/* Subtitle Input Skeleton */}
                            <div className="mb-6">
                                <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                            </div>

                            {/* Content Editor Skeleton */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <div className="space-y-4">
                                    {/* Simulated markdown content lines */}
                                    <div className="space-y-3">
                                        <div className="h-6 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-48"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-5/6"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-4/5"></div>
                                    </div>

                                    <div className="my-6">
                                        <div className="h-5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-40"></div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-11/12"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                                    </div>

                                    {/* List items skeleton */}
                                    <div className="space-y-2 ml-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-full"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-64"></div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-full"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-56"></div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-full"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-72"></div>
                                        </div>
                                    </div>

                                    {/* Quote skeleton */}
                                    <div className="my-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-r-lg border-l-4 border-cyan-500">
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                            <div className="h-4 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800 animate-shimmer bg-[length:200%_100%] rounded w-4/5"></div>
                                        </div>
                                    </div>

                                    {/* More content lines */}
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-10/12"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-2/3"></div>
                                    </div>

                                    {/* Code block skeleton */}
                                    <div className="my-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-48"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="space-y-6">
                        {/* Article Settings Skeleton */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 animate-pulse">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-5 h-5 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-200 dark:from-cyan-800 dark:via-cyan-700 dark:to-cyan-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-20 mb-2"></div>
                                    <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg w-full"></div>
                                </div>

                                <div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-12 mb-2"></div>
                                    <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg w-full"></div>
                                    <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32 mt-1"></div>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image Skeleton */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 animate-pulse">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="w-5 h-5 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                            </div>

                            <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center">
                                <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded mx-auto mb-2"></div>
                                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32 mx-auto mb-1"></div>
                                <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-24 mx-auto"></div>
                            </div>
                        </div>

                        {/* Markdown Guide Skeleton */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 animate-pulse">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-5 h-5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                <div className="h-5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-28"></div>
                            </div>
                            <div className="space-y-2">
                                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                    <div key={item} className="h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                ))}
                            </div>
                        </div>

                        {/* SEO Score Skeleton */}
                        <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800 animate-pulse">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-5 h-5 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                <div className="h-5 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded w-24"></div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex justify-between">
                                        <div className="h-4 bg-gradient-to-r from-green-200 via-green-300 to-green-200 dark:from-green-800 dark:via-green-700 dark:to-green-800 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                        <div className="h-4 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 dark:from-yellow-800 dark:via-yellow-700 dark:to-yellow-800 animate-shimmer bg-[length:200%_100%] rounded w-12"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}