import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../environment";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import Lottie from 'react-lottie'
import { wrongInputAnimation } from "../../styles/imagePath";
import { Badge } from "flowbite-react";
import { Button } from "flowbite-react";

const MyBlogsPage = () => {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getBlogs()
    }, []);

    const getBlogs = async () => {
        const result = await axios.get(`${API_BASE_URL}/api/blogs`)
        if (result.status == 200) {
            setBlogs(result.data)
        }
    }

    const handleNavigation = (_id) => {
        const queryParams = queryString.stringify({
            _id: _id
        });
        navigate(`/blog-component?${queryParams}`);
    };

    const renderWrongInput = () => {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: wrongInputAnimation,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
        return (
            <div className='flex flex-col  items-center w-full h-screen'>
                <div className="w-full max-w-lg">
                    <Lottie
                        options={defaultOptions}
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="text-center mt-8">
                    <h2 className="text-3xl font-bold mb-2 font-sans text-gray-800">
                        No Blogs Found
                    </h2>
                </div>
            </div>
        )

    }

    return (
        <div className="from-gray-100 to-gray-200 min-h-screen py-4 px-4 sm:px-6 lg:px-8 pt-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6 font-sans">
                    Discover Our Latest Blogs
                </h1>

                {blogs.length === 0 ? (
                    renderWrongInput()
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <a onClick={() => handleNavigation(blog._id)}>

                                <div
                                    key={blog._id}
                                    className="bg-white rounded-md shadow-md overflow-hidden transform transition duration-500 hover:scale-95 hover:shadow-xl"
                                >
                                    <div className="px-6 py-2">
                                        <h2 className="text-2xl font-semibold  text-gray-800 font-sans">{blog.heading}</h2>
                                        <p className="text-gray-600 mb-2 font-poppins">
                                            {blog.content.substring(0, 100)}...
                                        </p>
                                        <div className="flex items-center justify-between ">
                                            <span className="text-sm text-gray-500 font-sans">5 min read</span>

                                            <Button gradientDuoTone="purpleToBlue">
                                                <div className="flex items-center justify-center">
                                                    <span>Read More</span>
                                                </div>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="px-6 py-2 bg-indigo-50 flex flex-wrap gap-2">
                                        {(blog?.tags || []).map((item) => (
                                            <Badge color="warning">{item}</Badge>

                                        ))}

                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>

    );
}

export default MyBlogsPage