import Review from "./Review";

// Testimonials Component
const Testimonials = () => {
    return (
        <div className="lg:flex items-center  lg:justify-between lg:gap-4 gap-2">
            <Review />
            <Review />
            <Review />
            
        </div>
    );
};

export default Testimonials;