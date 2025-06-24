import { Search } from 'lucide-react';
import Form from 'next/form';
import React from 'react';

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <div className="relative">
            <Form action={`${process.env.NEXT_PUBLIC_BASE_URL}/articles/`} scroll={false} className="search-form">
                <button type='submit' className='search-btn text-white' >
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </button>
                <input
                    type="text"
                    placeholder="Search articles..."
                    defaultValue={query}
                    name="query"
                    className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900 dark:text-white"
                />
            </Form>
        </div>
    )
}

export default SearchForm
