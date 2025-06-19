import Link from 'next/link';
import { Calendar, User, ArrowRight, TrendingUp, Star, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-serif">
                  Best of the week
                </h1>
                <Link
                  href="/articles"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center space-x-1 transition-colors duration-200"
                >
                  <span>See all posts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Featured Article */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Travel destination"
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Travel
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                  Sep 06, 2024
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200 font-serif">
                  Get to your dream destinations with TravelPro
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Discover the world&apos;s most beautiful destinations and plan your perfect getaway with our comprehensive travel guides and expert recommendations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Sarah Johnson</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">5 min read</span>
                    </div>
                  </div>
                  <Link
                    href="/articles/travel-pro"
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium flex items-center space-x-1"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Categories */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-gray-900 dark:text-white">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 cursor-pointer">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Technology</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">124 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 cursor-pointer">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Travel</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">89 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 cursor-pointer">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Lifestyle</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">67 posts</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors duration-200 cursor-pointer">
                  <span className="font-medium text-gray-800 dark:text-gray-200">Business</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">45 posts</span>
                </div>
              </div>
            </div>

            {/* Editor's Picks */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-bold text-gray-900 dark:text-white">Editor&apos;s Picks</h3>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-3 cursor-pointer group">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Article thumbnail"
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                      The Future of Remote Work
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Alex Chen • 3 min read</p>
                  </div>
                </div>
                <div className="flex space-x-3 cursor-pointer group">
                  <img
                    src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Article thumbnail"
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                      Sustainable Living Tips
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Maya Patel • 4 min read</p>
                  </div>
                </div>
                <div className="flex space-x-3 cursor-pointer group">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Article thumbnail"
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                      Cryptocurrency Explained
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">David Kim • 6 min read</p>
                  </div>
                </div>
              </div>
              <Link
                href="/articles"
                className="inline-flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mt-4 transition-colors duration-200"
              >
                <span>See all picks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">50K+</h3>
              <p className="text-gray-600 dark:text-gray-400">Active Readers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1.2K+</h3>
              <p className="text-gray-600 dark:text-gray-400">Published Articles</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">500+</h3>
              <p className="text-gray-600 dark:text-gray-400">Writers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}