// Home Page

import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            
            <div className="max-w-[300px] mx-auto lg:container ">

                {/* Featured Products Section */}
                <div className="my-[100px]">
                    <h2 className="mb-[15px] lg:mb-[30px] text-[20px] lg:text-[40px] font-semibold text-center "> Featured Products</h2>

                    <FeaturedProducts />
                </div>
            </div>
        </div>
    );
};

export default Home;