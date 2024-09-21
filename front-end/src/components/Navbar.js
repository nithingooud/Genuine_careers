import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="bg-indigo-200 fixed w-full z-20 top-0 left-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
                    <Link to="/" className="flex items-center space-x-3">
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
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                    <div className="hidden md:flex md:items-center md:w-auto" id="navbar-default">
                        <ul className="flex gap-8">
                            <li>
                                <Link to="/" className="font-poppins font-semibold hover:text-indigo-600">Home</Link>
                            </li>
                            <li>
                                <Link to="/services" className="font-poppins font-semibold hover:text-indigo-600">Services</Link>
                            </li>
                            <li>
                                <Link to="/about" className="font-poppins font-semibold hover:text-indigo-600">About Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Sidebar */}
                <div className={`fixed top-0 right-0 w-64 bg-indigo-200 h-full transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
                    <button className="absolute top-4 right-4 p-2" onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul className="flex flex-col p-6 gap-6">
                        <li>
                            <Link to="/" onClick={toggleMenu} className="font-poppins font-semibold hover:text-indigo-600">Home</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={toggleMenu} className="font-poppins font-semibold hover:text-indigo-600">Services</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={toggleMenu} className="font-poppins font-semibold hover:text-indigo-600">About Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Overlay to close sidebar */}
                {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu}></div>}
            </nav>

            <main className="pt-2">

            </main>
        </>
    );
}

export default NavbarComponent;