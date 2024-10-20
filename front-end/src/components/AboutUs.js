import React from "react"
import '../styles/AboutJs.css'
import { Card } from "flowbite-react";
import 'react-toastify/dist/ReactToastify.css';
import { socialicon01, socialicon02, socialicon03, socialicon04 } from '../common/imagePath';


const AboutUsComponent = () => {
    return (
        <div className="pt-24">
            <Card className="max-w-5xl mx-auto mb-4 mt-4 shadow-md bg-white rounded-lg overflow-hidden">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-4 px-2 mx-auto max-w-screen-xl text-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We are building a community</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Here at Genuine Careers we focus on helping students not only by providing job updates but also teaching and giving guidance.</p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="https://t.me/genuinecareersbynithin" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Join Telegram
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>

                <div >
                    <h2 className="font-extrabold  text-gray-900">
                        About Us
                    </h2>
                    <p className="  font-normal text-gray-500 dark:text-gray-400">
                        Welcome to Genuine Careers, your source for career opportunities and insights. Our commitment is to deliver up-to-date information on internships and job openings across diverse industries.
                    </p>
                    <p className=" font-normal text-gray-500  dark:text-gray-400">
                        At Genuine Careers, we meticulously curate trending and authentic job opportunities, ensuring you have access to roles that match your career ambitions.

                    </p>
                    <h2 className="font-extrabold  text-gray-900">
                        Stay Updated!
                    </h2>
                    <p className="  font-normal text-gray-500 dark:text-gray-400">
                        Stay updated with the latest internship and job postings by visiting our website at <a style={{ color: 'blue' }} href="/">genuinecareers.in</a>. For tailored and exclusive job alerts, subscribe to our channel.                    </p>
                    <p className="  font-normal text-gray-500 dark:text-gray-400">
                        Channel: <a style={{ color: 'blue' }} href="https://t.me/genuineCareers">//t.me/genuinecareers</a></p>
                    <h2 className="font-extrabold  text-gray-900">
                        Collaborations and Promotions
                    </h2>
                    <p className="  font-normal text-gray-500 dark:text-gray-400">
                        If you're interested in partnering with us or promoting your services, please contact us at <span style={{ color: 'blue' }}> goudnithin77@gmail.com</span>.
                    </p>
                    <p className="  font-normal text-gray-500 dark:text-gray-400">
                        Thank you for choosing Go Careers to assist you in finding valuable career opportunities. We are dedicated to helping you reach your career objectives.
                    </p>
                </div>
            </Card>

        </div>
    )
}
export default AboutUsComponent