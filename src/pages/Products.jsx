import { useEffect, useState } from "react";
import { FilterBar } from "../components/products/FilterBar";
import { SearchBar } from "../components/share/SearchBar";
import { SortByPrice } from "../components/share/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../components/share/ProductCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // useState for Search project
    const [search, setSearch] = useState('');

    // useState for Sort project
    const [sort, setSort] = useState('asc');

    // useState for Search project
    const [brand, setBrand] = useState('');

    // useState for Sort project
    const [category, setCategory] = useState('');


    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);


    // useState for pagination project
    const [page, setPage] = useState(1);


    // useState for pagination project
    const [totalPages, setTotalPages] = useState(1);


    console.log('Search Product : ' + search)
    console.log('Sort Product : ' + sort)
    console.log('Brand Product : ' + brand)
    console.log('Category Product : ' + category)

    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
            axios.get(`https://travel-gears-zone-server.vercel.app/all-products?title=${search}&page=${page}&limit=9&sort=${sort}&brand=${brand}&category=${category}`).then(res => {

                setProducts(res.data.products);
                setUniqueBrand(res.data.brands);
                setUniqueCategory(res.data.categories);
                setTotalPages(Math.ceil(res.data.totalProducts / 9))

                setLoading(false)
                console.log(res.data)
            })
        }
        fetch();
    }, [search, sort, brand, category, page]);

    // Handle Search
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = '';
    }


    // Handle Reset
    const handleReset = () => {
        setSearch('');
        setBrand('');
        setCategory('');
        setSort('');
        window.location.reload()
    }

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

    }



    return (
        <div className="lg:container mx-auto mb-6">

            <h1 className="lg:my-8 my-6 lg:text-[40px] text-[25px]  font-semibold text-center">All Products</h1>

            {/* Searching and Sorting */}
            <div className="lg:flex justify-between items-center w-full mb-6">

                <SearchBar handleSearch={handleSearch} />
                <SortByPrice setSort={setSort} />

            </div>

            {/* Content */}
            <div className="lg:grid lg:grid-cols-12 gap-2">

                <div className="col-span-2">
                    <FilterBar
                        setBrand={setBrand}
                        setCategory={setCategory}
                        handleReset={handleReset}
                        uniqueBrand={uniqueBrand}
                        uniqueCategory={uniqueCategory}
                    />
                </div>

                {/* Showing Result  */}
                <div className="col-span-10">

                    {
                        loading ? (
                            <Loading />
                        ) : (
                            <>
                                {
                                    products.length === 0 ?
                                        <div className="w-full h-full flex items-center justify-center">
                                            <h1 className="text-3xl font-bold">No Products Found.</h1>

                                        </div> :
                                        <div className="min-h-screen lg:grid lg:grid-cols-3 gap-2 ">

                                            {
                                                products.map(product => (<ProductCard key={product._id} product={product} />))
                                            }

                                        </div>
                                }
                            </>
                        )
                    }

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 my-8">
                        <button className="btn p-4 border  border-solid  border-black rounded-[90px]" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                            <FaCircleArrowLeft />


                        </button>
                        <p> Page {page} of {totalPages}</p>

                        <button className="border p-2 border-solid  border-black rounded-[90px]" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
                            <FaCircleArrowRight />


                        </button>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default Products;