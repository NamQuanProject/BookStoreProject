import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

type Book = {
    _id: string;
    bookTitle: string;
    authorName: string;
    imageURL: string;
    category: string;
    bookDescription: string;
    bookPDFURL: string;
};
const OtherBooks = () => {
    const [books, setBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data.slice(4,10)))
            .catch(error => console.error("Error fetching books:", error));
    }, []);  
  return (
    <BookCard books={books} headline="Other Book" />
  )
}

export default OtherBooks