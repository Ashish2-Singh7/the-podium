"use client";
import React from 'react'
import { useAuth } from '../AuthContext';
import { Menu, X } from 'lucide-react';

const MobileMenuButton = () => {
    const { setIsMenuOpen, isMenuOpen } = useAuth();
    return (
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
    )
}

export default MobileMenuButton
