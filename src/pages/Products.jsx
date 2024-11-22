import { useEffect, useState } from "react";
import { FilterBar } from "../components/products/FilterBar";
import { SearchBar } from "../components/share/SearchBar";
import { SortByPrice } from "../components/share/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/share/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
           axios.get(`http://localhost:8000/all-products`).then(res => {
               setProducts(res.data)
               setLoading(false)
               console.log(res.data)
            })
        }
        fetch();
    },[])
    return (
        <div className="lg:container mx-auto mb-6">

            <h1 className="lg:my-10 my-6 lg:text-[40px] text-[25px]  font-semibold text-center">All Products</h1>

            {/* Searching and Sorting */}
            <div className="lg:flex justify-between items-center w-full mb-6">
                <h1><SearchBar/></h1>
                <h1><SortByPrice/></h1>
            </div>

            {/* Content */}
            <div className="lg:grid lg:grid-cols-12 gap-2">

                <div className="col-span-2">
                    <FilterBar />
                </div>
                
                {/* Showing Result  */}
                <div className="col-span-10">

                    {
                        loading ? (
                            <Loading/>
                        ) : (
                                <>
                                    {
                                        products.length === 0 ?
                                            <div className="w-full h-full flex items-center justify-center">
                                                <h1 className="text-3xl font-bold">No Products Found.</h1>
                                           
                                            </div> :
                                            <div className="min-h-screen lg:grid lg:grid-cols-3 gap-2 ">

                                                {
                                                    products.map(product => (<ProductCard key={product.objectId} product={product}/> ))
                                                }

                                            </div>
                                    }
                                </>
                        )
                    }

                    
                </div>

            </div>

        </div>
    );
};

export default Products;