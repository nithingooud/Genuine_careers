import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
    const [addJob, setAddJob] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let data = sessionStorage.getItem("addJob");
        if (data) {
            setAddJob(true);
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-indigo-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://res.cloudinary.com/nithinmanda/image/upload/v1725193913/Screenshot_2024-06-22_at_1.05.48_PM_wgt2r5.png" className="h-12 rounded-full" alt="Genuine Careers Logo" />
                    <div className="flex flex-col items-start">
                        <span className="text-2xl font-bold dark:text-white">developer.nithin</span>
                        <span className="text-sm text-gray-500">Let's develop together</span>
                    </div>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex items-center justify-between gap-8">
                        <li>
                            <Link to="/" onClick={toggleMenu} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/jobs" onClick={toggleMenu} aria-current="page">Jobs</Link>
                        </li>
                        {/* <li>
                            <Link to="/interviewExperience" onClick={toggleMenu} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Interview Experience</Link>
                        </li> */}
                        <li>
                            <Link to="/services" onClick={toggleMenu} >Services</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu} >About Us</Link>
                        </li>
                        {addJob && (
                            <>
                                <li>
                                    <Link to="/addJob" onClick={toggleMenu} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Jobs</Link>
                                </li>
                                <li>
                                    <Link to="/addCompany" onClick={toggleMenu} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Add Company</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;