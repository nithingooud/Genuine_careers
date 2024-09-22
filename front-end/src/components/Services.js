import { Button, Kbd, Badge } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineTipsAndUpdates, MdOutlineReviews } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
const ServicesComponent = () => {

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mt-8" >
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <BsPersonVideo3 className="h-10 w-10 mb-2" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Mock Interview</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Conducting personalized mock interviews to help you ace your job applications.
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge color="warning" className="text-sm">60 mins</Badge>
                        <Kbd className=" flex items-center justify-between text-lg font-semibold"><FaRupeeSign /> 999</Kbd>
                        <a href="https://wa.link/ubgf12">
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Book Now</span>
                                </div>
                            </Button>
                        </a>

                    </div>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <MdOutlineTipsAndUpdates className="h-10 w-10 mb-2" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Interview Prep Tips</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">With our Experience we will give you how to clear any interviews with perfect roadmap.
                    </p>
                    <div className="flex items-center justify-between">
                        <Badge color="warning" className="text-sm">60 mins</Badge>
                        <Kbd className=" flex items-center justify-between text-lg font-semibold"><FaRupeeSign /> 499</Kbd>
                        <a href="https://wa.link/tppm1a">
                            <Button outline gradientDuoTone="purpleToBlue">
                                <div className="flex items-center justify-between">
                                    <HiShoppingCart className="mr-2" />
                                    <span>Book Now</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <MdOutlineReviews className="h-10 w-10 mb-2" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Resume Review</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">We will review your resume and provide free templates which are ARS Friendly
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
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <SiGooglemeet className="h-10 w-10 mb-2" />
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">1:1</h5>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">You can discuss about anything related to tech and Education.
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
        </>
    )
}

export default ServicesComponent