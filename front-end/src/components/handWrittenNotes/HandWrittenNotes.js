import { Button, Carousel } from "flowbite-react";
import { HiDocumentDownload } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Notes } from "../../common/constants";
import queryString from 'query-string';



const HandWrittenNotes = () => {
    const navigate = useNavigate();

    const books = [
        { bookName: Notes.Java, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725377160/developer.nithin/JAVA_ytcq5h.jpg' },
        { bookName: Notes.Python, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725454935/developer.nithin/python.jpg' },
        { bookName: Notes.Cpp, link: 'https://res.cloudinary.com/nithinmanda/image/upload/v1725457305/developer.nithin/Cpp.jpg' },
    ]

    const handleNavigation = (book) => {
        const queryParams = queryString.stringify({
            book: book.bookName
        });
        navigate(`/handwritten-book?${queryParams}`);
    };


    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8" >
            {books.map((book, index) =>
            (
                <div key={index} class="p-3 m-6 bg-gray border border-gray-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex flex-col justify-center items-center ">
                        <img alt="Java Book" className="w-48 h-64 object-cover rounded-lg" src={book.link}></img>
                        <a onClick={() => handleNavigation(book)}>
                            <Button gradientMonochrome="lime">
                                <div className="flex items-center justify-between">
                                    <HiDocumentDownload className="mr-2" />
                                    <span>Read More</span>
                                </div>
                            </Button>
                        </a>
                    </div>
                </div>
            )
            )}

        </div>
    )
}

export default HandWrittenNotes