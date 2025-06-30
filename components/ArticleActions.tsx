// components/ArticleActions.tsx
"use client";

import React, { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface ArticleActionsProps {
    articleId: string; // The MongoDB _id of the article
}

export default function ArticleActions({ articleId }: ArticleActionsProps) {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/delete-article/${articleId}`, {
                method: 'DELETE',
            });

            const data = await res.json()

            if (res.ok) {
                setShowModal(false);
                window.location.reload();
                toast.success(data.message);
            } else {
                console.error('Failed to delete article');
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Error deleting article:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="flex items-center space-x-4 mt-6 absolute -right-10 mx-1 -top-12">
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/articles/update/${articleId}`} target="_blank">
                    <button
                        className="px-2 py-2 cursor-pointer bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                    >
                        <Pencil />
                    </button>
                </Link>
                <button
                    onClick={() => setShowModal(true)}
                    className="px-2 py-2 cursor-pointer bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 font-medium"
                >
                    <Trash2 />
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-sm modal-enter">
                        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Delete Article?</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Are you sure you want to permanently delete this article? This action cannot be undone.
                        </p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="cursor-pointer px-4 py-2 rounded-md border dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className={`cursor-pointer px-4 py-2 rounded-md ${!loading ? "bg-red-600 text-white" : "bg-gray-600 text-gray-400"} hover:${loading ? "bg-gray-700 " : "bg-red-700"} transition-colors`}
                            >
                                {loading ? <div role="status" className='mr-3'>
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-700 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div> : <span className='hidden sm:block'>Delete</span>}

                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}