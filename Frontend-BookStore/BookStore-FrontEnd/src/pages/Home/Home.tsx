import Banner from "../../components/Banner/Banner";
import BestSellerBooks from "../../components/BestSellerBooks/BestSellerBooks";
import FavBooks from "../../components/FavBooks/FavBooks";
import OtherBooks from "../../components/OtherBooks/OtherBooks";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import Review from "../../components/Review/Review";

function Home() {
  return (
    <div>
      <Banner />
      <BestSellerBooks/>
      <FavBooks/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
    </div>
  );
}
export default Home;
