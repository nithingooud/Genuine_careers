import { useSearchParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HandWrittenNotes } from '../../common/constants';
import { Blockquote } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

const BookContent = () => {
    const [searchParams] = useSearchParams();
    const currentBook = searchParams.get('book');

    // Custom function for Previous Arrow
    const renderArrowPrev = (clickHandler, hasPrev, label) => (
        <button
            type="button"
            onClick={clickHandler}
            disabled={!hasPrev}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 ${!hasPrev ? "opacity-50 cursor-not-allowed" : ""
                }`}
            aria-label={label}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );

    // Custom function for Next Arrow
    const renderArrowNext = (clickHandler, hasNext, label) => (
        <button
            type="button"
            onClick={clickHandler}
            disabled={!hasNext}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 ${!hasNext ? "opacity-50 cursor-not-allowed" : ""
                }`}
            aria-label={label}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );

    return (
        <div className="w-full max-w-4xl mx-auto mt-3 px-4 overflow-x-hidden">
            <div className='bg-slate-100'>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent break-words">
                    {currentBook} HandWritten Notes
                </h1>

                {/* Carousel */}
                <div className="w-full mt-4">
                    <span
                        className="text-xl md:text-2xl mb-4 font-bold flex justify-center bg-slate-400"
                        style={{ fontFamily: 'math', marginTop: '0.2rem', fontWeight: 'bolder' }}>
                        Preview
                    </span>
                    <div className="max-h-[60vh]">
                        <Carousel
                            autoFocus={true}
                            autoPlay={true}
                            dynamicHeight={true}
                            infiniteLoop={true}
                            interval={1500}
                            stopOnHover={true}
                            showThumbs={false}
                            renderArrowPrev={renderArrowPrev}
                            renderArrowNext={renderArrowNext}
                        >
                            {HandWrittenNotes[currentBook].PreviewImages.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        className="max-h-[60vh] object-contain w-full"
                                        alt={`Preview ${index + 1}`}
                                    />
                                    <p className="legend">{index === 0 ? `${currentBook} HandWritten Notes` : `Page ${index}`}</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div className='p-4 md:p-6'>
                    <Blockquote className="text-sm md:text-base">
                        {HandWrittenNotes[currentBook].description}
                    </Blockquote>
                    <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Benefits:</h3>
                        <ul className="mb-6 text-sm md:text-base">
                            {HandWrittenNotes[currentBook]?.benefits.map((item, index) => (
                                <li key={index} className="flex items-start mb-2">
                                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Contents:</h3>
                        <ul className="mb-6 text-sm md:text-base">
                            {HandWrittenNotes[currentBook]?.contents.map((item, index) => (
                                <li key={index} className="flex items-start mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-1" viewBox="0 -960 960 960" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-2 px-4 md:px-6 pb-6">
                    <div className="bg-white shadow-md p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Pdf Download</h3>
                        <p className="text-gray-600 mb-4 text-sm md:text-base">To download full length Pdf Book</p>
                        <p className="text-3xl md:text-4xl font-bold mb-6">₹{HandWrittenNotes[currentBook].cost}<span className="text-lg md:text-xl font-normal text-gray-600">/pdf</span></p>
                        <ul className="mb-6 text-sm md:text-base">
                            <li className="flex items-center mb-2">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                1 User
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Full length Pdf
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Life time validity
                            </li>
                        </ul>
                        <Button gradientDuoTone="purpleToBlue" className="w-full">
                            <div className="flex items-center justify-center">
                                <HiShoppingCart className="mr-2" />
                                <span>Buy Now</span>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookContent