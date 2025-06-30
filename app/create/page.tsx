import { Toaster } from 'react-hot-toast';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ArticleForm from '@/components/Create/ArticleForm';

export default async function CreateArticle() {
    const cookieStore = await cookies()
    const jwt = cookieStore.get('jwt')

    if (!jwt) redirect('/');


    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
                            Create New Article
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Share your thoughts, insights, and stories with our community
                        </p>
                    </div>

                    <ArticleForm />
                </div>
            </div>
        </>
    );
}