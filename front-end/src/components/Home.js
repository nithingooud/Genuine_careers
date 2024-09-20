
import { Button, Kbd, Badge } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineReviews, MdOutlineSearch } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const HomeComponent = () => {
    const navigate = useNavigate();

    const goToNotes = () => {
        navigate("/handwritten-notes"); // Navigates to the route in the same tab
    };

    const goToJobs = () => {
        navigate("/jobs")
    }

    const goToBlogs = () => {
        navigate("/my-blogs")
    }

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8" >
                <div className="flex flex-col justify-between max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   ">
                    <div className="flex flex-col items-center">
                        <div className="flex-grow flex items-start justify-center">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="150"
                                height="150"
                                src="https://codewithcurious.com/wp-content/uploads/2024/04/3-150x150.png.webp"
                                alt=""
                            />
                        </div>
                        <h5 className="flex justify-center mb-1 mt-8 text-2xl font-bold">Coding Hand Written Notes</h5>
                    </div>
                    <a onClick={goToNotes} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiShoppingCart className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
                <div className="max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   flex flex-col justify-between ">
                    <div className="flex flex-col items-center">
                        <div className="flex-grow flex items-start justify-center ">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="200"
                                height="200"
                                src="https://res.cloudinary.com/nithinmanda/image/upload/v1725699670/developer.nithin/job_1_aeefw8.png"
                                alt=""
                            />
                        </div>
                        <h5 className="flex justify-center mb-1 mt-8 text-2xl font-bold">Job Openings</h5>
                    </div>
                    <a onClick={goToJobs} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiShoppingCart className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
                <div className="max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <div className="flex-grow flex items-start justify-center ">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="200"
                                height="200"
                                src="https://res.cloudinary.com/nithinmanda/image/upload/v1725699670/developer.nithin/job_1_aeefw8.png"
                                alt=""
                            />
                        </div>
                        <h5 className="flex justify-center mb-1 mt-8 text-2xl font-bold">Blogs</h5>
                    </div>
                    <a onClick={goToBlogs} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiShoppingCart className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent