import Link from 'next/link';
import AuthModals from '../Auth/AuthModals';
import MobileMenuButton from './MobileMenuButton';
import MobileNavigation from './MobileNavigation';
import AuthUserSection from './AuthUserSection';
import { cookies } from 'next/headers';

// import { useTheme } from 'next-themes';

export default async function Navbar() {
    const cookieStore = await cookies()
    const jwt = cookieStore.get('jwt')
    return (
        <>
            <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <img
                                // src={theme == "dark" ? "/logo-dark.png" : "/logo-light.png"}
                                src={"/logo-dark.png"}
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
                            {!jwt ? (
                                <span className="bg-gray-400 text-white px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
                                    Create
                                </span>
                            ) : (
                                <Link
                                    href="/create"
                                    className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-colors duration-200 font-inter font-medium"
                                >
                                    Create
                                </Link>
                            )}
                        </div>

                        {/* Auth & User Section */}
                        <AuthUserSection />

                        {/* Mobile menu button */}
                        <MobileMenuButton />
                    </div>
                </div>
            </nav >

            {/* Mobile Navigation */}
            < MobileNavigation />
            {/* Auth Modals */}
            < AuthModals />
        </>
    );
}