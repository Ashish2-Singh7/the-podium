import { LogOut, User } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const LogoutUserSkeleton = () => {
    return (
        <div className="flex items-center space-x-3 animate-pulse">
            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
        </div>
    );
};

const LogoutUserButtons = ({ user, handleLogout }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient || !user) return <LogoutUserSkeleton />;

    return (
        <div className="flex items-center space-x-3">
            <button
                onClick={handleLogout}
                className="p-2 cursor-pointer rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                title="Logout"
            >
                <LogOut className="w-5 h-5" />
            </button>
            <Link href="/profile">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
                    {user?.profilePic
                        ? <img src={user.profilePic} alt="avatar" className='w-8 h-8 rounded-full object-cover' />
                        : <User className="w-5 h-5 text-white" />}
                </div>
            </Link>
        </div>
    );
};

export default LogoutUserButtons;
