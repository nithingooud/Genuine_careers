import React, { useState } from 'react';
import { API_BASE_URL } from '../../environment';
import axios from 'axios'

const AddBlog = () => {
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const blogData = {
            heading,
            content,
            author,
            tags: tags.split(',').map(tag => tag.trim()), // Convert tags to an array
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/api/blogs`, blogData, {
                headers: {
                    'Content-Type': 'application/json', // Ensure the correct header is set
                }
            });

            if (response.status == 200) {
                setHeading('');
                setContent('');
                setAuthor('');
                setTags('');
            } else {
                alert('Error: Could not add the blog.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: Could not save the blog.');
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Heading:</label>
                    <input
                        type="text"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Blog heading"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Content (supports code snippets):</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your blog content here... Use Markdown for code snippets."
                        rows="10"
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Author name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Tags (comma separated):</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g. tech, javascript"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );

};

export default AddBlog;
