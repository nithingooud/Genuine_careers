import { Button, Carousel } from "flowbite-react";
import { HiDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Notes, notesType } from "../../common/constants";
import queryString from 'query-string';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const HandWrittenNotes = () => {

    const codingBooks = [
        { bookName: Notes.Java, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725377160/developer.nithin/JAVA_ytcq5h.jpg' },
        { bookName: Notes.Python, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725454935/developer.nithin/python.jpg' },
        { bookName: Notes.OOPS_using_Cpp, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725457305/developer.nithin/Cpp.jpg' },
    ]

    const aptitudeBooks = [
        { bookName: Notes.Aptitude, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1726887165/aptitude_Handwritten_Notes_dra8ju.png' },
        { bookName: Notes.Reasoning, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1726887166/reasoning_Handwritten_Notes_igbwxe.png' },
        { bookName: Notes.Maths, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1726887166/reasoning_Handwritten_Notes_1_jxxxf2.png' },
    ]
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentNotesType = searchParams.get('notesType');
    const [books, setBooks] = useState([])

    useEffect(() => {
        updateBooks();
    }, [])

    const updateBooks = () => {
        if (currentNotesType == notesType.APTITUDE) {
            setBooks(aptitudeBooks)
        } else if (currentNotesType == notesType.CODING) {
            setBooks(codingBooks)
        }
    }

    const handleNavigation = (book) => {
        const queryParams = queryString.stringify({
            book: book.bookName
        });
        navigate(`/handwritten-book?${queryParams}`);
    };

    return (
        <div className="h-screen">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
                {books.map((book, index) =>
                (
                    <div key={index} className="p-3 m-6 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-indigo-400 bg-opacity-25 backdrop-filter backdrop-blur-md ">
                        <a onClick={() => handleNavigation(book)}>
                            <div className="p-3 flex flex-col justify-center items-center bg-white">
                                <img alt="Java Book" className="w-48 h-64 object-cover rounded-lg p-2" src={book.link}></img>
                                <a onClick={() => handleNavigation(book)}>
                                    <Button outline gradientDuoTone="purpleToBlue">
                                        <div className="flex items-center justify-between">
                                            <HiDownload className="mr-2" />
                                            <span>Download Pdf</span>
                                        </div>
                                    </Button>
                                </a>
                            </div>
                        </a>
                    </div>
                )
                )}

            </div>
        </div>
    )
}

export default HandWrittenNotes