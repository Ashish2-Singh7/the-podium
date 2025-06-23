'use client';

import { useEffect, useState } from 'react';
import { Save, Upload, Tag, Type, AlignLeft } from 'lucide-react';
// import { marked } from 'marked';
// import markdownit from 'markdown-it'
import MDEditor from '@uiw/react-md-editor';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function CreateArticle() {

    useEffect(() => {
        async function checkSession() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/session-status`);
                const data = await res.json();
                if (!data.isAuthenticated) {
                    redirect('/')
                }
            } catch (error) {
                console.error('Error checking session:', error);
                redirect('/')
            }
        }
        checkSession();
    }, []);


    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        category: '',
        tags: '',
        featuredImage: ''
    });

    // const [isPreview, setIsPreview] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/article/create-article`, {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if(data.error){
                toast.error(data.error);
            }
            else{
                toast.success(data.message);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevData => ({
                    ...prevData,
                    [name]: reader.result as string,
                }));

            };
            reader.readAsDataURL(file);
        } else {
            setFormData(prevData => ({
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

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Editor */}
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8">
                                {/* Editor Toolbar */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center space-x-4">
                                        <button
                                            // onClick={() => setIsPreview(false)}
                                            // className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${!isPreview ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                            //     }`}
                                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200`}
                                        >
                                            <Type className="w-4 h-4" />
                                            <span className='hidden sm:block'>Write</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        {/* <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-500 sm:border-0 text-xs sm:text-base">
                                        Save Draft
                                    </button> */}
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                                        >
                                            <Save className="w-4 h-4" />
                                            <span className='hidden sm:block'>Publish</span>
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
                </div>
            </div>
        </>
    );
}