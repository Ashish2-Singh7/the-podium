import { Heart } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <img
                                src="/logo-dark.png"
                                alt="The Podium Logo"
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold text-gray-900 dark:text-white font-playfair">The Podium</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                            Discover amazing articles, stories, and insights from writers around the world.
                            Join our community of passionate readers and creators.
                        </p>
                        <div className="flex space-x-4">
                            <Link target='__blank' href="/" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <FaTwitter className="w-5 h-5 rounded-full" />
                            </Link>
                            <Link target='__blank' href="/" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <FaLinkedin className="w-5 h-5 rounded-full" />
                            </Link>
                            <Link target='__blank' href="/" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <FaGithub className="w-5 h-5 rounded-full" />
                            </Link>
                            <Link target='__blank' href="/" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
                                <FaInstagram className="w-5 h-5 rounded-full" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/articles" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/create" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                                    Write for Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Technology</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Travel</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Lifestyle</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">Business</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        © 2025 The Podium. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-1 mt-4 md:mt-0">
                        <span className="text-gray-600 dark:text-gray-400 text-sm">Built with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">by</span>
                        <span className="text-gray-900 dark:text-white font-semibold text-sm">Ashish Singh</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}