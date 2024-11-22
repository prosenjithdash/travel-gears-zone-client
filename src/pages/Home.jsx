// Home Page

import Banner from "../components/home/Banner";
import FAQs from "../components/home/FAQs";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            
            <div className="max-w-[300px] mx-auto lg:container ">

                {/* Featured Products Section */}
                <div className="lg:my-[100px] my-[50px]">
                    <h2 className="mb-[15px] lg:mb-[30px] text-[20px] lg:text-[40px] font-semibold text-center "> Featured Products</h2>

                    <FeaturedProducts />
                </div>

                {/* Testimonial Section */}
                <div className="lg:my-[100px] my-[50px]">
                    <h2 className="mb-[15px] lg:mb-[30px] text-[20px] lg:text-[40px] font-semibold text-center "> Testimonials Section </h2>

                    <Testimonials/>
                </div>

                {/* Testimonial Section */}
                <div className="lg:my-[100px] my-[50px]">
                    <h2 className="mb-[15px] lg:mb-[30px] text-[20px] lg:text-[40px] font-semibold text-center "> Frequently Asked Questions</h2>
                    <FAQs/>
                </div>
            </div>
        </div>
    );
};

export default Home;