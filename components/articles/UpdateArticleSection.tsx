"use client";
import React from 'react'
import { Save, Upload, Tag, Type, AlignLeft } from 'lucide-react';
import MDEditor from '@uiw/react-md-editor';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


interface ArticleFormData {
    title: string;
    subtitle: string;
    content: string;
    category: string;
    tags: string;
    featuredImage: string;
}
interface IClientArticle {
    _id: string;
    userId: string; // Changed to string as it will not be populated
    title: string;
    subtitle?: string;
    content: string;
    category?: string;
    tags?: string[];
    featuredImage?: string;
    views: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    slug: string;
    likes: string[]; // Array of user IDs (strings)
    dislikes: string[]; // Array of user IDs (strings)
}
const UpdateArticleSection = ({ article, articleId }: { article: IClientArticle, articleId: string }) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: article.title || '',
        subtitle: article.subtitle || '',
        content: article.content || '',
        category: article.category || '',
        tags: Array.isArray(article.tags) ? article.tags.join(', ') : '',
        featuredImage: article.featuredImage || ''
    });
    const [loading, setLoading] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Corrected: Target the PATCH route for article updates
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/update/${articleId}`, {
                method: 'PATCH', // Changed method to PATCH
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (!res.ok) {
                const errorMessage = data.errors ? data.errors.join(', ') : data.message || "Failed to update article.";
                toast.error(errorMessage);
            } else {
                toast.success(data.message);
                router.push(`/articles/${data.article.slug}`);
            }
        } catch (err: any) {
            console.error('Error updating article:', err);
            toast.error(err.message || "An unexpected error occurred during update.");
        } finally {
            setLoading(false);
        }

    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData: ArticleFormData) => ({
                    ...prevData,
                    [name]: reader.result as string,
                }));

            };
            reader.readAsDataURL(file);
        } else {
            setFormData((prevData: ArticleFormData) => ({
                ...prevData,
                [name]: '', // or null if you prefer
            }));
        };
    };

    const categories = [
        'Technology',
        'Travel',
        'Lifestyle',
        'Business',
        'Health',
        'Food',
        'Fashion',
        'Sports',
        'Entertainment',
        'Education'
    ];


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Editor */}
            <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                    {/* Editor Toolbar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-4">
                            <div
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200`}
                            >
                                <Type className="w-4 h-4" />
                                <span className='hidden sm:block'>Write</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={handleSubmit}
                                className={`bg-blue-600  ${loading ? "bg-gray-600 text-gray-400" : "bg-blue-600 cursor-pointer text-white"} px-6 py-2 rounded-lg hover:${loading ? "bg-gray-700 " : "bg-blue-700 "} transition-colors duration-200 flex items-center space-x-2`}
                            >
                                {loading ? <div role="status" className='mr-3'>
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-700 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div> : <Save className="w-4 h-4" />}
                                <span className='hidden sm:block'>{loading ? "Updating..." : "Update"}</span>
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Article title..."
                                className="w-full text-3xl font-bold border-none outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 bg-transparent text-gray-900 dark:text-white font-playfair"
                                required
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="subtitle"
                                value={formData.subtitle}
                                onChange={handleChange}
                                placeholder="Write a compelling subtitle..."
                                className="w-full text-xl text-gray-600 dark:text-gray-400 border-none outline-none resize-none placeholder-gray-400 dark:placeholder-gray-500 bg-transparent"
                            />
                        </div>
                        <MDEditor
                            value={formData.content}
                            onChange={(value) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    content: value as string || ''
                                }))
                            }
                            preview="edit"
                            height={800}
                            style={{ overflow: "hidden" }}
                            textareaProps={{
                                placeholder: "Briefly describe your idea and what problem it solves",
                            }}
                            previewOptions={{
                                disallowedElements: ["style"]
                            }}
                        />
                    </form>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                {/* Article Settings */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <AlignLeft className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-gray-900 dark:text-white">Article Settings</h3>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                required
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Tags
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="web development, react, javascript"
                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Separate tags with commas
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6">
                    <div className="flex items-center space-x-2 mb-6">
                        <Upload className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-gray-900 dark:text-white">Featured Image</h3>
                    </div>

                    <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-lg p-6 text-center hover:border-gray-300 dark:hover:border-gray-500 transition-colors duration-200">
                        <label htmlFor="featuredImageInput" className='cursor-pointer'>
                            {formData.featuredImage.length === 0 && <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />}
                            <input
                                type="file"
                                id="featuredImageInput"
                                name="featuredImage"
                                onChange={handleFileChange}
                                className="hidden"
                                accept="image/*" // Restrict to image files
                            />
                            {formData.featuredImage ? (
                                <div className="flex flex-col items-center space-y-2">
                                    <img
                                        src={formData.featuredImage}
                                        alt="Featured Preview"
                                        className="w-full h-32 object-cover rounded-lg border border-gray-300 dark:border-gray-600 mx-auto"
                                    />
                                    <span className="text-green-600 text-xs font-semibold">Image uploaded!</span>
                                </div>
                            ) : (
                                <span className="block text-gray-400 text-xs">No image selected</span>
                            )}
                        </label>
                        {formData.featuredImage.length === 0 && <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Click to upload image</p>}
                        {formData.featuredImage.length === 0 && <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG up to 2MB</p>}
                    </div>
                </div>

                {/* Markdown Guide */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center space-x-2 mb-4">
                        <Tag className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-gray-900 dark:text-white">Markdown Guide</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded"># Heading</code> - Large heading</div>
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">**bold**</code> - Bold text</div>
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">*italic*</code> - Italic text</div>
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">- item</code> - List item</div>
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">&gt; quote</code> - Quote block</div>
                        <div><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">`code`</code> - Inline code</div>
                        <p className='text-xs pt-2'>For more info visit the site <Link href={"https://www.markdownguide.org/"} target='__blank' className='hover:underline hover:text-blue-600 transition-colors duration-200'>markdownguide.org</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateArticleSection;
