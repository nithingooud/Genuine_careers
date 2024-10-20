import { useSearchParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { HandWrittenNotes } from '../../common/constants';
import { Blockquote } from "flowbite-react";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { API_BASE_URL } from '../../environment'
import { Rating } from "flowbite-react";


const BookContent = () => {
    const [searchParams] = useSearchParams();
    const currentBook = searchParams.get('book');
    const [HandWrittenNotes, setHandWrittenNotes] = useState({
        previewImages: [],
        description: '',
        benefits: [],
        contents: [],
        cost: '0',
        title: '',
        subTitle: '',
        whatsAppLinK: '',
    });

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = async () => {
        const result = await axios.post(`${API_BASE_URL}/notes`, { notes: currentBook });
        if (result.status == 200 && result.data.length > 0) {
            setHandWrittenNotes(result.data[0])
        }
    }

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
        <div className="w-full max-w-4xl mx-auto mt-3 px-4 overflow-x-hidden pt-24">
            <div className='bg-slate-100'>
                <h1 className="text-4xl ml-2 md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent break-words">
                    {HandWrittenNotes.title}
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
                            {HandWrittenNotes?.previewImages.map((image, index) => (
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
                        {HandWrittenNotes.description}
                    </Blockquote>
                    <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Benefits:</h3>
                        <ul className="mb-6 text-sm md:text-base">
                            {HandWrittenNotes?.benefits.map((item, index) => (
                                <li key={index} className="flex items-start mb-2">
                                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-lg md:text-xl font-semibold mb-1">Contents:</h3>
                        <ul className="mb-6 text-sm md:text-base">
                            {HandWrittenNotes?.contents.map((item, index) => (
                                <li key={index} className="flex items-start mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-1" viewBox="0 -960 960 960" fill="#000000"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="px-2 md:px-6 pb-6">
                    <div className="bg-white shadow-md p-4 md:p-6">
                        <h3 className="text-xl md:text-2xl font-semibold mb-1">Pdf Download</h3>
                        <div className="flex items-center space-x-4">
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                            </Rating>
                            <p className="text-xl md:text-xl text-gray-500 font-poppins">(3 customer reviews)</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <p className="text-xl md:text-2xl font-bold  line-through text-gray-500">₹{HandWrittenNotes.cost * 2 + 2}</p>
                            <p className="text-3xl md:text-2xl font-bold text-gray-900">₹{HandWrittenNotes.cost}</p>
                            <p className="text-xl md:text-2xl text-red-500 font-semibold">(50% OFF)</p>
                        </div>

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
                        <Button gradientDuoTone="purpleToBlue" className="w-full" onClick={() => window.open(HandWrittenNotes?.whatsAppLink, '_blank')}>
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