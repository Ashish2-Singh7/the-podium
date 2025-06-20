import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, TrendingUp } from 'lucide-react';
import LikeDislikeButtons from '@/components/LikeDislikeButton';

export async function generateStaticParams() {
    // Return the IDs for all articles that should be statically generated
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' }
    ];
}

export default function ArticlePage({ params }: { params: { id: string } }) {
    // This would normally fetch article data based on the ID
    const article = {
        id: 1,
        title: 'The Complete Guide to Web Development in 2024',
        content: `
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Web development has evolved dramatically over the past few years, and 2024 promises to bring even more exciting changes to the industry. From new frameworks to revolutionary tools, developers have more options than ever before.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8 font-playfair">The Current State of Web Development</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        The landscape of web development in 2024 is characterized by rapid innovation and an increasing focus on user experience. Modern developers need to stay updated with the latest technologies while maintaining a solid foundation in core principles.
      </p>
      
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Key Technologies Shaping 2024</h3>
      <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6 ml-4">
        <li>React 18 and the new concurrent features</li>
        <li>Next.js 14 with improved performance</li>
        <li>TypeScript adoption reaching new heights</li>
        <li>Tailwind CSS for rapid UI development</li>
        <li>Edge computing and serverless architectures</li>
      </ul>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
        <p class="text-gray-700 dark:text-gray-300 italic">
          "The future of web development lies in creating seamless, performant experiences that work across all devices and platforms."
        </p>
      </blockquote>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8 font-playfair">Best Practices for Modern Development</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        As we move forward in 2024, certain practices have emerged as essential for successful web development projects. These practices focus on performance, accessibility, and maintainability.
      </p>
      
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Performance Optimization</h3>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Website performance has never been more critical. Users expect fast, responsive experiences, and search engines prioritize fast-loading sites. Key strategies include code splitting, lazy loading, and optimizing images and assets.
      </p>
      
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Accessibility First</h3>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Building accessible websites isn't just about compliance—it's about creating inclusive experiences for all users. This means proper semantic HTML, keyboard navigation, screen reader compatibility, and thoughtful design choices.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8 font-playfair">Looking Ahead</h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        The web development industry continues to evolve at a rapid pace. Staying current with new technologies while mastering fundamental concepts remains the key to success in this dynamic field.
      </p>
    `,
        author: 'John Mitchell',
        date: 'December 15, 2024',
        readTime: '8 min read',
        category: 'Technology',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
        views: '12.5K',
        tags: ['Web Development', 'React', 'Next.js', 'TypeScript', 'Frontend']
    };

    const relatedArticles = [
        {
            id: 2,
            title: 'React 18: What\'s New and How to Upgrade',
            author: 'Sarah Johnson',
            readTime: '6 min read',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            title: 'TypeScript Best Practices for 2024',
            author: 'Mike Chen',
            readTime: '5 min read',
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 4,
            title: 'Building Performant Web Apps with Next.js',
            author: 'Emma Rodriguez',
            readTime: '7 min read',
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Back Button */}
                <Link
                    href="/articles"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Articles</span>
                </Link>

                {/* Article Header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-8">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="p-8 md:p-12">
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                                {article.category}
                            </span>
                            <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>{article.views} views</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight font-playfair">
                            {article.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                            <div className="flex space-x-6 mb-4 md:mb-0 flex-col sm:flex-row sm:items-center">
                                <div className="flex items-center space-x-2">
                                    <User className="w-5 h-5 text-gray-400" />
                                    <span className="font-medium text-gray-900 dark:text-white">{article.author}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                    <Calendar className="w-4 h-4" />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12 mb-8">
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Like/Dislike Buttons */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <LikeDislikeButtons />
                    </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="flex items-center space-x-2 mb-8">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair">Related Articles</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedArticles.map((relatedArticle) => (
                            <Link
                                key={relatedArticle.id}
                                href={`/articles/${relatedArticle.id}`}
                                className="group"
                            >
                                <img
                                    src={relatedArticle.image}
                                    alt={relatedArticle.title}
                                    className="w-full h-32 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-200 mb-2 leading-tight">
                                    {relatedArticle.title}
                                </h3>
                                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                    <span>{relatedArticle.author}</span>
                                    <span>{relatedArticle.readTime}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}