import { useEffect, useState } from "react";

import { Card } from "flowbite-react";

type Book = {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
};
const Shop = () => {
  const [books, setBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);
  return (
    <div className="mt-32 px-4 lg:px24">
      <h2 className=" mb-4 text-5xl font-bold text-center">
        All Books Are Here
      </h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id} className="max-w-sm">
            <img className="h-96" src={book.imageURL} alt={book.bookTitle} />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p> {book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt quae quaerat, ipsam a officiis qui veritatis recusandae
                quibusdam fugiat soluta aspernatur eum ab sapiente, sunt
                voluptate delectus eius cumque maxime.
              </p>
            </p>

            <button className="bg-blue-700 font-semibold text-white py-2 rounded">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
