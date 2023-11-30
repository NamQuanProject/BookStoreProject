// SingleBook.tsx
import React from "react";
import { useLoaderData } from "react-router-dom";

interface Book {
  _id: string;
  bookTitle: string ; 
  imageURL : string ; 
}

const SingleBook: React.FC = () => {
  const { _id , bookTitle , imageURL } = useLoaderData() as Book;
  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src={imageURL} alt="" className="h-96"/>
        <h2>{bookTitle}</h2>
        <h1>{_id}</h1>
    </div>
  ) 

};

export default SingleBook;