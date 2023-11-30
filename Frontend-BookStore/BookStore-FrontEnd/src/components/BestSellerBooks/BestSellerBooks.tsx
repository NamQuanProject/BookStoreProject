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

function BestSellerBooks() {
    const [books, setBooks] = useState<Array<Book>>([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books")
            .then(res => res.json())
            .then(data => setBooks(data.slice(0, 8)))
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div>
            <BookCard headline={"Best Seller Books"} books={books} />
        </div>
    );
}

export default BestSellerBooks;