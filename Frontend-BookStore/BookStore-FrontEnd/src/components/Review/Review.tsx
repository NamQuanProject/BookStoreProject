import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./review.css";

// import required modules
import { Pagination } from "swiper/modules";


// import some icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../../assets/profile.jpg"

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24 review">
      <h2 className="text-5xl font-bold text-center mb-2 leading-snug">
        Customer
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-xl border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* text */}
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto excepturi quidem, totam pariatur vel assumenda
                quibusdam obcaecati cum corporis. Mollitia quidem neque maxime
                dolorem iusto. Dolorum itaque consequuntur assumenda architecto!
              </p>
              <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>
              <h5 className="text-lg font-medium">Nquan</h5>
              <p className="text-base ">CEO of ABC</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-xl border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* text */}
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto excepturi quidem, totam pariatur vel assumenda
                quibusdam obcaecati cum corporis. Mollitia quidem neque maxime
                dolorem iusto. Dolorum itaque consequuntur assumenda architecto!
              </p>
              <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>
              <h5 className="text-lg font-medium">Nquan</h5>
              <p className="text-base ">CEO of ABC</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-xl border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* text */}
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto excepturi quidem, totam pariatur vel assumenda
                quibusdam obcaecati cum corporis. Mollitia quidem neque maxime
                dolorem iusto. Dolorum itaque consequuntur assumenda architecto!
              </p>
              <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>
              <h5 className="text-lg font-medium">Nquan</h5>
              <p className="text-base ">CEO of ABC</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-xl border">
          <div className="space-y-6">
            <div className="text-amber-500 flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            {/* text */}
            <div className="mt-7">
              <p className="mb-5 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto excepturi quidem, totam pariatur vel assumenda
                quibusdam obcaecati cum corporis. Mollitia quidem neque maxime
                dolorem iusto. Dolorum itaque consequuntur assumenda architecto!
              </p>
              <Avatar img={proPic} alt="avatar of Jese" rounded  className="w-10 mb-4"/>
              <h5 className="text-lg font-medium">Nquan</h5>
              <p className="text-base ">CEO of ABC</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
