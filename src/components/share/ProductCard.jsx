import axios from "axios";
import useUserData from "../../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
    const userData = useUserData();
    const userEmail = userData.email;
    // console.log(userEmail)

    const handleWishlist = async() => {
        await axios.patch("http://localhost:8000/wishlist/add", { userEmail: userEmail, productId: product._id }).then((res) => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product added to your wishlist.",
                    showConfirmButton: false,
                    timer: 1500
                });
           }
        })
            
    }
    return (
        <div className=" border shadow-xl p-4  rounded-lg">
            <figure>
                <img
                    className="w-full h-[250px] rounded-t-lg object-cover"
                    src={product?.imageURL}
                    alt="Product image" />
            </figure>
            <div className="">
                <p className="lg:text-[14px] mt-4">{ product?.category}</p>
                <p className="lg:text-[22px] font-bold">{product?.title }</p>
             
                <p className="text-gray-500 text-[16px]">
                    {product?.description?.length < 80 ? `${product?.description}` : `${product?.description?.slice(0, 50)}...`}</p>
               
            </div>
            <div className="flex justify-between text-[14px] mt-2 mb-3">
                <p><span className="font-semibold">Brand: </span>{product?.brand}</p>
                <p><span className="font-semibold">Stock: </span>{product?.stock}</p>
                <p><span className="font-semibold">Price: </span>{product?.price}</p>
            </div>
            <button onClick={handleWishlist} className="btn w-full py-2 bg-gray-300 text-black">Add to wishlist</button>
        </div>
    );
};

export default ProductCard;