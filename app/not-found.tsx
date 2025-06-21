import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <div className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-4">
                        404
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
                        Page Not Found
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        Oops! The page you're looking for seems to have wandered off the stage.
                        Don't worry, even the best stories have plot twists.
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                        The page might have been moved, deleted, or you might have mistyped the URL.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>

                    <Link
                        href="/articles"
                        className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium text-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <Search className="w-5 h-5" />
                        <span>Browse Articles</span>
                    </Link>
                </div>

                {/* Footer Message */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                        Still can't find what you're looking for?{' '}
                        <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:underline font-medium">
                            Contact our support team
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}