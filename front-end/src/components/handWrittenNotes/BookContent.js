import { useSearchParams } from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HandWrittenNotes } from '../../common/constants';
import { List } from "flowbite-react";
import { Blockquote, Badge } from "flowbite-react";




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
        <div className="max-w-4xl mx-auto mt-3">
            <div className='bg-slate-100 px-4'>
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {currentBook} HandWritten Notes
                </span>
                {/* Carousel */}
                <div className="w-full mx-auto mt-4">
                    <span
                        className="text-2xl mb-4 font-bold flex justify-center bg-slate-400"
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
                            <div>
                                <img
                                    src={HandWrittenNotes[currentBook].PreviewImages[0]}
                                    className="max-h-[60vh] object-contain"
                                />
                                <p className="legend">{currentBook} HandWritten Notes</p>
                            </div>
                            <div>
                                <img
                                    src={HandWrittenNotes[currentBook].PreviewImages[1]}
                                    className="max-h-[60vh] object-contain"
                                />
                                <p className="legend">Page 1</p>
                            </div>
                            <div>
                                <img
                                    src={HandWrittenNotes[currentBook].PreviewImages[2]}
                                    className="max-h-[60vh] object-contain"
                                />
                                <p className="legend">Page 2</p>
                            </div>
                            <div>
                                <img
                                    src={HandWrittenNotes[currentBook].PreviewImages[3]}
                                    className="max-h-[60vh] object-contain"
                                />
                                <p className="legend">Page 3</p>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className='p-6 m-6'>
                    <Blockquote>
                        {HandWrittenNotes[currentBook].description}
                    </Blockquote>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Badge color="warning" size="sm">Benefits</Badge>
                    </div>
                    <List>
                        {HandWrittenNotes[currentBook]?.benefits.map(item => (
                            <List.Item>{item}</List.Item>
                        ))}
                    </List>
                    <div>
                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge color="warning" size="sm">Contents</Badge>
                        </div>
                        <List>
                            {HandWrittenNotes[currentBook]?.contents.map(item => (
                                <List.Item>{item}</List.Item>
                            ))}
                        </List>
                    </div>
                </div>

                {/* Syllabus */}


            </div>
        </div>


    )
}

export default BookContent