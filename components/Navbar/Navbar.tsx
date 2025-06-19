'use client';

import Link from 'next/link';
import { User, Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <img
                                src={theme == "dark" ? "/logo-dark.png" : "/logo-light.png"}
                                alt="The Podium Logo"
                                className="w-8 h-8"
                            />
                            <span className="text-xl font-bold text-gray-900 dark:text-white font-playfair">The Podium</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                href="/articles"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter font-medium transition-colors duration-200"
                            >
                                Articles
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter font-medium transition-colors duration-200"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-inter font-medium transition-colors duration-200"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/create"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-inter font-medium"
                            >
                                Create
                            </Link>
                        </div>

                        {/* Theme Toggle & User Profile */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button> */}
                            <Link href="/profile">
                                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200">
                                    <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                </div>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 z-50 relative"
                        >
                            <div className="w-6 h-6 relative">
                                <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-100' : 'rotate-0 opacity-100'}`}>
                                    {isMenuOpen ? <X className="w-6 h-6 rotate-45" /> : <Menu className="w-6 h-6" />}
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Slide-out Menu */}
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {/* Menu Content */}
                    <div className="flex flex-col h-full">
                        {/* Navigation Links */}
                        <div className="flex-1 px-6 pb-8 pt-24">
                            <div className="space-y-6">
                                <Link
                                    href="/articles"
                                    className="flex items-center text-lg font-medium font-inter text-gray-700 dark:text-gray-300 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Articles
                                </Link>
                                <Link
                                    href="/about"
                                    className="flex items-center text-lg font-medium font-inter text-gray-700 dark:text-gray-300 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center text-lg font-medium font-inter text-gray-700 dark:text-gray-300 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/profile"
                                    className="flex items-center text-lg font-medium font-inter text-gray-700 dark:text-gray-300 py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Profile
                                </Link>

                                {/* Create Button */}
                                <Link
                                    href="/create"
                                    className="inline-flex items-center font-inter justify-center w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-medium text-lg mt-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Create 
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="px-6 py-6  border-t border-gray-200 dark:border-gray-700">
                            {/* Theme Toggle */}
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                <span className="text-gray-900 dark:text-white font-medium font-inter">
                                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                </span>
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-yellow-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>

                            {/* User Profile */}
                            <Link
                                href="/profile"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center space-x-3 w-full p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 mt-3"
                            >
                                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-gray-900 dark:text-white font-medium font-inter">Ashish Singh</div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm font-inter">View Profile</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}