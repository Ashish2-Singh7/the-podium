'use client';

import { useState } from 'react';
import { Mail, MapPin, Calendar, Edit3, Settings, BookOpen, Heart, Eye, MessageCircle, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Ashish Singh',
        bio: 'Passionate writer and tech enthusiast. I love sharing insights about web development, design, and the future of technology.',
        location: 'San Francisco, CA',
        email: 'ashish@thepodium.com',
        website: 'https://ashishsingh.dev',
        joinDate: 'January 2023',
        avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    });

    const stats = [
        { label: 'Articles Published', value: '24', icon: BookOpen, color: 'blue' },
        { label: 'Total Views', value: '125K', icon: Eye, color: 'green' },
        { label: 'Likes Received', value: '3.2K', icon: Heart, color: 'red' },
        { label: 'Comments', value: '892', icon: MessageCircle, color: 'purple' }
    ];

    const achievements = [
        { title: 'Top Writer', description: 'Most read article of the month', icon: Award, color: 'yellow' },
        { title: 'Rising Star', description: 'Fastest growing author', icon: TrendingUp, color: 'green' },
        { title: 'Community Favorite', description: 'Most liked author', icon: Heart, color: 'red' }
    ];

    const recentArticles = [
        {
            id: 1,
            title: 'The Complete Guide to Web Development in 2024',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: 'Dec 15, 2024',
            views: '12.5K',
            likes: 234,
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 2,
            title: 'Building Scalable React Applications',
            date: 'Dec 10, 2024',
            views: '8.3K',
            likes: 189,
            image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            id: 3,
            title: 'The Future of AI in Web Development',
            desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: 'Dec 5, 2024',
            views: '15.2K',
            likes: 312,
            image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Save profile data logic here
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Profile Header */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden mb-8">
                    <div className="h-32 w-full overflow-hidden">
                        <img
                            src="/cover.png"
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="px-8 pb-8">
                        <div className="flex flex-col md:flex-row items-start md:items-end mb-6 -mt-16 md:mt-0">
                            <img
                                src={profileData.avatar}
                                alt={profileData.name}
                                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mb-4 md:mb-0 md:mr-6"
                            />
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2">
                                    <div>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={profileData.name}
                                                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                                                className="text-3xl font-bold text-gray-900 dark:text-white mb-2 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-blue-500 font-playfair max-w-[60%]"
                                            />
                                        ) : (
                                            <h1 className="text-3xl font-bold text-gray-700 dark:text-white mb-2 font-playfair">
                                                {profileData.name}
                                            </h1>
                                        )}
                                        <div className="flex sm:items-center sm:space-y-0 space-y-1 sm:space-x-4 text-white dark:text-gray-400 mb-4 flex-col sm:flex-row">
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{profileData.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>Joined {profileData.joinDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        {isEditing ? (
                                            <>
                                                <button
                                                    onClick={handleSave}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                >
                                                    Save Changes
                                                </button>
                                                <button
                                                    onClick={() => setIsEditing(false)}
                                                    className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => setIsEditing(true)}
                                                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                                                >
                                                    <Edit3 className="w-4 h-4" />
                                                    <span className='hidden sm:block'>Edit Profile</span>
                                                </button>
                                                <button className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                                    <Settings className="w-4 h-4" />
                                                    <span className='hidden sm:block'>Settings</span>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                                {isEditing ? (
                                    <textarea
                                        value={profileData.bio}
                                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                        rows={3}
                                        className="w-full text-gray-600 dark:text-gray-400 bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:outline-none focus:border-blue-500 resize-none max-w-[75%] mt-4"
                                    />
                                ) : (
                                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mt-4 md:mt-0">
                                        {profileData.bio}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                                <Mail className="w-4 h-4" />
                                <span>{profileData.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>🌐</span>
                                <Link href={profileData.website} target='__blank' className="text-blue-600 hover:text-blue-700">
                                    {profileData.website}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 text-center">
                                    <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-3`}>
                                        <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Recent Articles */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Recent Articles</h2>
                            <div className="space-y-6">
                                {recentArticles.map((article) => (
                                    <div key={article.id} className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 cursor-pointer text-sm sm:text-lg">
                                                {article.title}
                                            </h3>
                                            <p className="font-semibold text-gray-900 dark:text-gray-400 mb-2 cursor-pointer text-xs sm:text-base">
                                                {article?.desc ? `${article.desc.slice(0, 50)}...` : <em className="text-gray-500 dark:text-gray-500">No description provided</em>}
                                            </p>
                                            <div className="flex sm:items-center sm:space-x-4 text-sm text-gray-500 dark:text-gray-400 flex-col sm:flex-row space-y-1 sm:space-y-0">
                                                <span>{article.date}</span>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4" />
                                                    <span>{article.views}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Heart className="w-4 h-4" />
                                                    <span>{article.likes}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Achievements */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Achievements</h3>
                            <div className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className={`w-10 h-10 bg-${achievement.color}-100 dark:bg-${achievement.color}-900/30 rounded-full flex items-center justify-center flex-shrink-0`}>
                                            <achievement.icon className={`w-5 h-5 text-${achievement.color}-600`} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Activity */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Recent Activity</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm text-gray-900 dark:text-white">Published {`"The Complete Guide to Web Development"`}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm text-gray-900 dark:text-white">Received 50 likes on recent article</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">3 days ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm text-gray-900 dark:text-white">Commented on {`"React Best Practices"`}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">5 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Connect</h3>
                            <div className="space-y-3">
                                <Link target="__blank" href="/profile" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                    <span><FaTwitter className="w-5 h-5 rounded-full" /></span>
                                    <span>Twitter</span>
                                </Link>
                                <Link target="__blank" href="/profile" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                    <span><FaLinkedin className="w-5 h-5 rounded-full" /></span>
                                    <span>LinkedIn</span>
                                </Link>
                                <Link target="__blank" href="/profile" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                    <span><FaGithub className="w-5 h-5 rounded-full" /></span>
                                    <span>GitHub</span>
                                </Link>
                                <Link target="__blank" href="/profile" className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors duration-200">
                                    <span><FaInstagram className="w-5 h-5 rounded-full" /></span>
                                    <span>Instagram</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}