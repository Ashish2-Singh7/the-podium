"use client";
import Link from 'next/link';
import React from 'react'
import { useAuth } from '../AuthContext';
import { LogOut, User } from 'lucide-react';

const MobileNavigation = () => {

    const { isMenuOpen, setIsMenuOpen, useToken, handleLogout, openLogin, openSignup } = useAuth();
    return (
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
                            {!useToken ? (
                                <div className="space-y-3 pt-4">
                                    <button
                                        onClick={() => {
                                            openLogin();
                                            setIsMenuOpen(false);
                                        }}
                                        className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl  border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 font-medium text-lg"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => {
                                            openSignup();
                                            setIsMenuOpen(false);
                                        }}
                                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    href="/create"
                                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg mt-4"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Create Article
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="px-6 py-6  border-t border-gray-200 dark:border-gray-700">
                        {/* User Profile or Logout */}
                        {useToken ? (
                            <div className="space-y-3">
                                <Link
                                    href="/profile"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center space-x-3 w-full p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-gray-900 dark:text-white font-medium">Ashish Singh</div>
                                        <div className="text-gray-500 dark:text-gray-400 text-sm">View Profile</div>
                                    </div>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center space-x-3 w-full p-4 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors duration-200"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span className="font-medium">Logout</span>
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavigation
