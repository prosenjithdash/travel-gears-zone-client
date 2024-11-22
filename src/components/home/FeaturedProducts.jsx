import ProductCard from "../share/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-4 gap-2 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
        </div>
    );
};

export default FeaturedProducts;