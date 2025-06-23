import Link from 'next/link';
import { Search, FileX, RefreshCw, Home, BookOpen } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            {/* Background Circle with Pulse */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-full animate-pulse"></div>
            
            {/* Main Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FileX className="w-16 h-16 text-cyan-600 dark:text-cyan-400 animate-bounce" />
            </div>
            
            {/* Floating Search Icons */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-ping">
              <Search className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-100 dark:bg-cyan-900/50 rounded-full flex items-center justify-center animate-pulse delay-300">
              <BookOpen className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-6"></div> */}
          
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Oops! The article you're looking for seems to have vanished into the digital void. 
            It might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span className="text-sm">Don't worry, great stories are always being published...</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Search className="w-5 h-5" />
            <span>Browse All Articles</span>
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium text-lg border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Still having trouble?{' '}
            <Link href="/contact" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}