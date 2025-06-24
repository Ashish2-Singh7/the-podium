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

    const handleDelete = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/delete-article/${articleId}`, {
                method: 'DELETE',
            });

            const data = await res.json()

            if (res.ok) {
                window.location.reload();
                toast.success(data.message);
            } else {
                console.error('Failed to delete article');
                toast.error(data.error);
            }
        } catch (error) {
            console.error('Error deleting article:', error);
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
                                className="cursor-pointer px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}