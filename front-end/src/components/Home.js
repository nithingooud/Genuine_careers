
import { Button, Kbd, Badge } from "flowbite-react";
import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';

const HomeComponent = () => {
    const navigate = useNavigate();

    const goToNotes = (notes) => {
        const queryParams = queryString.stringify({
            notesType: notes
        });
        navigate(`/handwritten-notes?${queryParams}`);
    };

    const goToJobs = () => {
        navigate("/jobs")
    }

    const goToBlogs = () => {
        navigate("/my-blogs")
    }

    return (
        <div className="bg pt-8">
            <div className=" mx-auto max-w-screen-xl text-center mt-12 " >
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Ultimate Destination for <span className="text-blue-500">College Students</span> and <span className="text-red-500">Developers</span></h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8" >
                <div style={{ backgroundColor: 'white' }} className="max-w-sm p-3 m-6 bg-blue  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   flex flex-col justify-between ">
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
                                <HiChevronRight className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
                <div style={{ backgroundColor: 'white' }} className="max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                        <div className="flex-grow flex items-start justify-center ">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="180"
                                height="180"
                                src="https://res.cloudinary.com/nithinmanda/image/upload/v1726853106/Screenshot_2024-09-20_at_10.54.41_PM_rv7sxt.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <h5 className="flex justify-center mb-1 text-2xl font-bold">Blogs</h5>

                    <a onClick={goToBlogs} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiChevronRight className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
                <div style={{ backgroundColor: 'white' }} className="flex flex-col justify-between max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   ">
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
                    <a onClick={() => goToNotes('coding')} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiChevronRight className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
                <div style={{ backgroundColor: 'white' }} className="flex flex-col justify-between max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[320px] max-w-[320px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md   ">
                    <div className="flex flex-col items-center">
                        <div className="flex-grow flex items-start justify-center">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="150"
                                height="150"
                                src="https://res.cloudinary.com/nithinmanda/image/upload/v1726885706/Screenshot_2024-09-21_at_7.58.05_AM_aoxidb.png"
                                alt=""
                            />
                        </div>
                        <h5 className="flex justify-center mb-1 mt-8 text-2xl font-bold">Aptitude HandWritten Notes</h5>
                    </div>
                    <a onClick={() => goToNotes('aptitude')} className="flex justify-center">
                        <Button outline gradientDuoTone="purpleToBlue">
                            <div className="flex items-center justify-center">
                                <HiChevronRight className="mr-2" />
                                <span>Read More</span>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
            <div style={{ height: '11rem' }}>
            </div>
        </div>
    )
}

export default HomeComponent