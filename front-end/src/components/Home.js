
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

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8" >
                <div class="max-w-sm p-3 m-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex flex-col justify-center items-center ">
                        <img loading="lazy" decoding="async" width="150" height="150" src="https://codewithcurious.com/wp-content/uploads/2024/04/3-150x150.png.webp" class="attachment-thumbnail size-thumbnail wp-image-13889" alt="" srcset="https://codewithcurious.com/wp-content/uploads/2024/04/3-150x150.png.webp 150w, https://codewithcurious.com/wp-content/uploads/2024/04/3-300x300.png.webp 300w, https://codewithcurious.com/wp-content/uploads/2024/04/3-1024x1024.png.webp 1024w, https://codewithcurious.com/wp-content/uploads/2024/04/3-768x768.png.webp 768w, https://codewithcurious.com/wp-content/uploads/2024/04/3-600x600.png.webp 600w, https://codewithcurious.com/wp-content/uploads/2024/04/3.png.webp 1080w" sizes="(max-width: 150px) 100vw, 150px"></img>
                        <h5 class="flex justify-center mb-1 text-2xl font-bold">Coding Hand Written Notes</h5>
                        <a onClick={goToNotes}>
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Read More</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col justify-center items-center ">
                        {/* <img loading="lazy" decoding="async" width="150" height="150" src={{ svg_files.JOBS }} sizes="(max-width: 150px) 100vw, 150px"></img> */}

                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Coding Hand Written Notes</h5>
                        <a href="https://wa.link/tppm1a">
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Read More</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <MdOutlineReviews className="h-10 w-10 mb-2" />
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Resume Review</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">We will review your resume and provide free templates which are ARS Friendly
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge color="warning" className="text-sm">60 mins</Badge>
                        <Kbd className=" flex items-center justify-between text-lg font-semibold"><FaRupeeSign /> 599</Kbd>
                        <a href="https://wa.link/fl9tq7">
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Book Now</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <SiGooglemeet className="h-10 w-10 mb-2" />
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">1:1</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">You can discuss about anything related to tech and Education.
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge color="warning" className="text-sm">60 mins</Badge>
                        <Kbd className=" flex items-center justify-between text-lg font-semibold"><FaRupeeSign /> 899</Kbd>
                        <a href="https://wa.link/kzywic">
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Book Now</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeComponent