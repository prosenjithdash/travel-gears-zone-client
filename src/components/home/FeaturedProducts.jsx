import ProductCard from "../share/ProductCard";

const FeaturedProducts = () => {
    return (
        <div className="lg:flex items-center lg:justify-between lg:gap-4 gap-2">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default FeaturedProducts;