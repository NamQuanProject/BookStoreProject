
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./bookcard.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

type Book = {
  _id: string;
  bookTitle: string;
  authorName: string;
  imageURL: string;
  category: string;
  bookDescription: string;
  bookPDFURL: string;
};

const BookCard: React.FC<{ headline: string; books: Array<Book> }> = ({
  headline,
  books,
}) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {" "}
        {headline}{" "}
      </h2>

      {/* Cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}> 
                    <div className="relative">
                        <img src={book.imageURL} alt={book.bookTitle}></img>
                        <div className="absolute top-2 right-2 bg-blue-600 hover:bg-black p-2 rounded">
                            <FaCartShopping className="w-4 h-4 text-white" />
                        </div>
                    </div>
                    <div className="bg-white">
                        <h3 className="font-semibold">{book.bookTitle}</h3>
                        <p className="font-bold">{book.authorName}</p>
                        <div>
                            $10.00
                        </div>
                    </div>
                    
                </Link>
            </SwiperSlide> )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default BookCard;
