export default function ProfileLoading() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Profile Header Skeleton */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-8 animate-pulse">
                    {/* Cover Image Skeleton */}
                    <div className="relative h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]"></div>

                    {/* Profile Info Skeleton */}
                    <div className="relative px-8 pb-8">
                        <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-16 md:-mt-20">
                            {/* Avatar Skeleton */}
                            <div className="relative">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] border-4 border-white dark:border-gray-800 shadow-lg"></div>
                                <div className="absolute bottom-2 right-2 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></div>
                            </div>

                            {/* User Details Skeleton */}
                            <div className="flex-1 mt-4 md:mt-0">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="space-y-3">
                                        {/* Name */}
                                        <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg w-48"></div>
                                        {/* Username */}
                                        <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32"></div>
                                        {/* Bio */}
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-full max-w-2xl"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                                        </div>
                                    </div>
                                    {/* Action Buttons Skeleton */}
                                    <div className="flex items-center space-x-3 mt-4 md:mt-0">
                                        <div className="h-10 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded-lg w-32"></div>
                                        <div className="h-10 w-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg"></div>
                                    </div>
                                </div>

                                {/* Contact Info Skeleton */}
                                <div className="flex flex-wrap items-center gap-4 mt-4">
                                    {[1, 2, 3, 4].map((item) => (
                                        <div key={item} className="flex items-center space-x-2">
                                            <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats & Badges Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* Stats Skeleton */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 animate-pulse">
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32 mb-6"></div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className="text-center space-y-2">
                                    <div className="h-8 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-12 mx-auto"></div>
                                    <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-16 mx-auto"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Badges Skeleton */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 animate-pulse">
                        <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-32 mb-6"></div>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded-full"></div>
                                    <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-24"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Tabs Skeleton */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden animate-pulse">
                    {/* Tab Navigation Skeleton */}
                    <div className="border-b border-gray-200 dark:border-gray-700 px-8">
                        <div className="flex space-x-8">
                            {[1, 2].map((item) => (
                                <div key={item} className="py-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content Skeleton */}
                    <div className="p-8">
                        <div className="space-y-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex space-x-4 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    {/* Article Image Skeleton */}
                                    <div className="w-24 h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded-lg flex-shrink-0"></div>

                                    {/* Article Content Skeleton */}
                                    <div className="flex-1 space-y-3">
                                        {/* Category and Date */}
                                        <div className="flex items-center space-x-2">
                                            <div className="h-5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded-full w-20"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-16"></div>
                                        </div>

                                        {/* Title */}
                                        <div className="space-y-2">
                                            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-3/4"></div>
                                        </div>

                                        {/* Excerpt */}
                                        <div className="space-y-2">
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-full"></div>
                                            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-2/3"></div>
                                        </div>

                                        {/* Stats */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                {[1, 2, 3].map((stat) => (
                                                    <div key={stat} className="flex items-center space-x-1">
                                                        <div className="w-4 h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded"></div>
                                                        <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 animate-shimmer bg-[length:200%_100%] rounded w-8"></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="h-4 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 dark:from-blue-800 dark:via-blue-700 dark:to-blue-800 animate-shimmer bg-[length:200%_100%] rounded w-20"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}