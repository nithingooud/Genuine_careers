// BlogDetails.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // For rendering markdown
import { API_BASE_URL } from '../../environment';
import axios from 'axios';
import remarkGfm from 'remark-gfm'; // For GitHub Flavored Markdown support


const BlogDetails = () => {

    const [searchParams] = useSearchParams();
    const currentBlogId = searchParams.get('_id');
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        getBlog();
    }, [currentBlogId]);

    const getBlog = async () => {
        const response = await axios.get(`${API_BASE_URL}/api/blogs/${currentBlogId}`)
        if (response.status == 200) {
            setBlog(response.data)
        }
    }

    if (!blog) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white mt-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 bg-indigo-100 p-2 rounded">{blog.heading}</h1>
            <div className="text-gray-700">
                <ReactMarkdown
                    children={blog.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            return inline ? (
                                <code className={`bg-gray-200 rounded px-1 text-sm ${className}`} {...props}>
                                    {children}
                                </code>
                            ) : (
                                <pre className={`bg-gray-100 rounded-lg p-4 overflow-x-auto ${className}`} {...props}>
                                    <code className="text-gray-800">{children}</code>
                                </pre>
                            );
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default BlogDetails;
