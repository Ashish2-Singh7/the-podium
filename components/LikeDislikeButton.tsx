'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import toast from 'react-hot-toast';
import { likeDislikeArticleFunction } from '@/lib/action';

interface LikeDislikeButtonsProps {
    loggedIn: boolean;
    slug: string;
    userActionInitial: 'like' | 'dislike' | null;
    likesNumber: number;
    dislikesNumber: number;
}

export default function LikeDislikeButtons({ loggedIn, slug, userActionInitial, likesNumber, dislikesNumber }: LikeDislikeButtonsProps) {
    const [likes, setLikes] = useState(likesNumber);
    const [dislikes, setDislikes] = useState(dislikesNumber);
    const [userAction, setUserAction] = useState<'like' | 'dislike' | null>(userActionInitial);

    const handleLike = async () => {
        if (loggedIn) {
            if (userAction === 'like') {
                setLikes(prevState => prevState - 1);
                setUserAction(null);
                await likeDislikeArticleFunction(slug, "null");
            } else if (userAction === 'dislike') {
                setLikes(prevState => prevState + 1);
                setDislikes(prevState => prevState - 1);
                setUserAction('like');
                await likeDislikeArticleFunction(slug, 'like');
            } else {
                setLikes(prevState => prevState + 1);
                setUserAction('like');
                await likeDislikeArticleFunction(slug, 'like');
            }
        } else {
            toast.error("Login in account first!")
        }
    };

    const handleDislike = async () => {
        if (loggedIn) {
            if (userAction === 'dislike') {
                setDislikes(prevState => prevState - 1);
                setUserAction(null);
                await likeDislikeArticleFunction(slug, null);
            } else if (userAction === 'like') {
                setDislikes(prevState => prevState + 1);
                setLikes(prevState => prevState - 1);
                setUserAction('dislike');
                await likeDislikeArticleFunction(slug, 'dislike');
            } else {
                setDislikes(prevState => prevState + 1);
                setUserAction('dislike');
                await likeDislikeArticleFunction(slug, 'dislike');
            }
        } else {
            toast.error("Login in account first!")
        }
    };

    return (
        <div className="flex items-center justify-center space-x-6">
            <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Did you find this article helpful?</p>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={handleLike}
                        className={`cursor-pointer flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${userAction === 'like'
                            ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-400'
                            : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-600'
                            }`}
                    >
                        <ThumbsUp className="w-5 h-5" />
                        <span className="font-medium">{likes}</span>
                    </button>

                    <button
                        onClick={handleDislike}
                        className={`cursor-pointer flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${userAction === 'dislike'
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