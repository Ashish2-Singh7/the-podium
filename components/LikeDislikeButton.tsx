'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function LikeDislikeButtons() {
    const [likes, setLikes] = useState(142);
    const [dislikes, setDislikes] = useState(8);
    const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(null);

    const handleLike = () => {
        if (userAction === 'like') {
            setLikes(likes - 1);
            setUserAction(null);
        } else if (userAction === 'dislike') {
            setLikes(likes + 1);
            setDislikes(dislikes - 1);
            setUserAction('like');
        } else {
            setLikes(likes + 1);
            setUserAction('like');
        }
    };

    const handleDislike = () => {
        if (userAction === 'dislike') {
            setDislikes(dislikes - 1);
            setUserAction(null);
        } else if (userAction === 'like') {
            setDislikes(dislikes + 1);
            setLikes(likes - 1);
            setUserAction('dislike');
        } else {
            setDislikes(dislikes + 1);
            setUserAction('dislike');
        }
    };

    return (
        <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Did you find this article helpful?</p>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleLike}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${userAction === 'like'
                                ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400'
                                : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-600'
                            }`}
                    >
                        <ThumbsUp className="w-5 h-5" />
                        <span className="font-medium">{likes}</span>
                    </button>

                    <button
                        onClick={handleDislike}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${userAction === 'dislike'
                                ? 'bg-red-100 dark:bg-red-900/30 border-red-500 text-red-700 dark:text-red-400'
                                : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600'
                            }`}
                    >
                        <ThumbsDown className="w-5 h-5" />
                        <span className="font-medium">{dislikes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}