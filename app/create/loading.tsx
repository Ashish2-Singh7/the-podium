export default function LoadingCreateArticle() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen animate-pulse">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Skeleton */}
                <div className="text-center mb-12">
                    <div className="h-10 w-72 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4" />
                    <div className="h-5 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto" />
                </div>

                {/* Layout Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Editor Section */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 space-y-4">
                            {/* Toolbar */}
                            <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-4">
                                <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                                <div className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                            </div>
                            {/* Title */}
                            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                            {/* Subtitle */}
                            <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                            {/* Editor Content */}
                            <div className="h-[600px] w-full bg-gray-200 dark:bg-gray-700 rounded" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Article Settings */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4">
                            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded mt-4" />
                            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                        </div>

                        {/* Featured Image */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 space-y-4">
                            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
                            <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                        </div>

                        {/* Markdown Guide */}
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 space-y-3">
                            <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded" />
                            {[...Array(5)].map((_, idx) => (
                                <div key={idx} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
