import { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../environment";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import Lottie from 'react-lottie'
import { wrongInputAnimation } from "../../styles/imagePath";




const MyBlogsPage = () => {

    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getBlogs()
    }, []);

    const getBlogs = async () => {
        const result = await axios.get(`${API_BASE_URL}/api/blogs`)
        if (result.status == 200) {
            console.log(result)
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
        <div className="" style={{ backgroundColor: 'rgb(241 245 249)' }}>
            <div className="container mx-auto py-4 max-w-2xl mx-auto" >
                {/* <h1 className="text-4xl font-bold text-center bg-indigo-100 mb-8">All Blogs</h1> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.length == 0 ? renderWrongInput() : blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{blog.heading}</h2>
                            <p className="text-gray-700 mb-4">
                                {blog.content.substring(0, 100)}...
                            </p>

                            <a
                                onClick={() => handleNavigation(blog._id)}
                                className="text-blue-500 hover:text-blue-700 cursor-pointer font-semibold"
                            >
                                Read more
                            </a>

                            <div className="border-t border-gray-300 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default MyBlogsPage