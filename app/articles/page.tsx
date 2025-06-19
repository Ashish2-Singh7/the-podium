'use client';

import Link from 'next/link';
import { Search, Calendar, User, ArrowRight, Filter, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Articles() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All Articles', count: 324 },
        { id: 'technology', name: 'Technology', count: 124 },
        { id: 'travel', name: 'Travel', count: 89 },
        { id: 'lifestyle', name: 'Lifestyle', count: 67 },
        { id: 'business', name: 'Business', count: 44 },
    ];

    const featuredArticles = [
        {
            id: 1,
            title: 'The Complete Guide to Web Development in 2024',
            excerpt: 'Explore the latest trends, frameworks, and best practices for modern web development.',
            author: 'John Mitchell',
            date: 'Dec 15, 2024',
            readTime: '8 min read',
            category: 'Technology',
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '12.5K'
        },
        {
            id: 2,
            title: 'Hidden Gems: 10 Underrated Travel Destinations',
            excerpt: 'Discover breathtaking locations that haven\'t been overtaken by mass tourism yet.',
            author: 'Emma Rodriguez',
            date: 'Dec 14, 2024',
            readTime: '6 min read',
            category: 'Travel',
            image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '9.8K'
        },
        {
            id: 3,
            title: 'Minimalism: The Art of Living with Less',
            excerpt: 'How embracing minimalism can lead to a more fulfilling and purposeful life.',
            author: 'Sarah Chen',
            date: 'Dec 13, 2024',
            readTime: '5 min read',
            category: 'Lifestyle',
            image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '7.2K'
        },
        {
            id: 4,
            title: 'AI Revolution: How Machine Learning is Changing Business',
            excerpt: 'The impact of artificial intelligence on modern business operations and strategy.',
            author: 'Michael Johnson',
            date: 'Dec 12, 2024',
            readTime: '7 min read',
            category: 'Business',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '15.1K'
        },
        {
            id: 5,
            title: 'Sustainable Fashion: Style with a Conscience',
            excerpt: 'Exploring eco-friendly fashion choices that don\'t compromise on style.',
            author: 'Lisa Wang',
            date: 'Dec 11, 2024',
            readTime: '4 min read',
            category: 'Lifestyle',
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '6.3K'
        },
        {
            id: 6,
            title: 'Digital Nomad Life: Working from Paradise',
            excerpt: 'Tips and insights for maintaining productivity while traveling the world.',
            author: 'Alex Martinez',
            date: 'Dec 10, 2024',
            readTime: '6 min read',
            category: 'Travel',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
            views: '11.7K'
        }
    ];

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
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900 dark:text-white"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Browse by Category</h2>
                        <Filter className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editor's Picks */}
                <div className="mb-12">
                    <div className="flex items-center space-x-2 mb-8">
                        <TrendingUp className="w-6 h-6 text-orange-500" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Editor's Picks</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredArticles.slice(0, 3).map((article) => (
                            <Link
                                key={article.id}
                                href={`/articles/${article.id}`}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                            >
                                <div className="relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                                        <TrendingUp className="w-3 h-3" />
                                        <span>{article.views}</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex items-center space-x-1">
                                                <User className="w-3 h-3" />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                        <span>{article.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* All Articles */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-playfair">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredArticles.map((article) => (
                            <Link
                                key={article.id}
                                href={`/articles/${article.id}`}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-32 h-32 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6 flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-400 text-xs">{article.date}</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center space-x-3">
                                            <span>{article.author}</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <TrendingUp className="w-3 h-3" />
                                            <span>{article.views}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
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