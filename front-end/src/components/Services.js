import { Button, Kbd, Badge } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { BsPersonVideo3 } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineTipsAndUpdates, MdOutlineReviews } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
const ServicesComponent = () => {

    return (
        <>
            {/* <div id="sticky-banner" class="fixed  start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="flex items-center mx-auto">
                    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                            </svg>
                            <span class="sr-only">Light bulb</span>
                        </span>
                        <span>Want to build a crazy websites <a href="https://wa.link/wt21ju" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Let's Discuss</a></span>
                    </p>
                </div>
            </div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 mt-8" >
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <BsPersonVideo3 className="h-10 w-10 mb-2" />
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Mock Interview</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Conducting personalized mock interviews to help you ace your job applications.
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
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <MdOutlineTipsAndUpdates className="h-10 w-10 mb-2" />
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Interview Prep Tips</h5>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">With our Experience we will give you how to clear any interviews with perfect roadmap.
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
        </>
    )
}

export default ServicesComponent