import { calculateReadingTime, formatMonthYear, getExcerpt } from '@/utils/formatDate'
import { Clock, TrendingUp, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ArticleCard = ({ article }) => {
    
    return (
        <Link
            href={`/articles/${article.slug}`}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            target='__blank'
        >
            <div className="relative">
                <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                    </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-gray-700 dark:text-gray-300 flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{article.views}</span>
                </div>
            </div>
            <div className="p-6 flex flex-col justify-between sm:h-48">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                    {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {getExcerpt(article.content)}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{article.userId.username}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{calculateReadingTime(article.content)}</span>
                        </div>
                    </div>
                    <span>{formatMonthYear(article.createdAt)}</span>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard
