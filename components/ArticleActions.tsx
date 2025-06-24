// components/ArticleActions.tsx
"use client";

import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface ArticleActionsProps {
    articleId: string; // The MongoDB _id of the article
    articleSlug: string; // The slug of the article
}

export default function ArticleActions({ articleId, articleSlug }: ArticleActionsProps) {

    const handleDelete = () => {
        // Implement delete logic here.
        // This would typically involve:
        // 1. A confirmation modal (NOT window.confirm)
        // 2. An API call (DELETE method) to your backend
        // 3. Redirecting the user after successful deletion (e.g., to dashboard)
        alert('Delete functionality not yet implemented. Confirm deletion?'); // Placeholder alert
        console.log(`Attempting to delete article with ID: ${articleId}`);
        // Example: router.push('/dashboard'); after successful deletion
    };

    return (
        <div className="flex items-center space-x-4 mt-6 absolute -right-10 mx-1 -top-12">
            <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/articles/update/${articleId}`} target="_blank">
                <button
                    className="px-2 py-2 cursor-pointer bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                >
                    <Pencil />
                </button>
            </Link>
            <button
                onClick={handleDelete}
                className="px-2 py-2 cursor-pointer bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200 font-medium"
            >
                <Trash2 />
            </button>
        </div>
    );
}