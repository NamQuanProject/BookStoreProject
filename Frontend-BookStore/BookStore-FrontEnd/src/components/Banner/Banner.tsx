import BannerCard from "../BannerCard/BannerCard";

function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left-side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-6xl font-bold leading-snug text-black">
            Buy and sell your books <span className="text-blue-700"> for the best prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, reprehenderit voluptatibus laborum illum optio fuga
            nobis at temporibus? Labore error laudantium tenetur veniam dolorum,
            tempore delectus dignissimos molestiae qui non.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 round-s-sm outline-none "
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
