import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

// Add Products
const AddProducts = () => {
    // password valitetion korar jonno react er akti library hocks from use korbo -> https://react-hook-form.com/get-started#Quickstart
    // React hock form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth();

    // onSubmit function
    const onSubmit = (data) => {
        const title = data.title;
        const brand = data.brand;
        const imageURL = data.imageURL;
        const price = parseFloat(data.price);
        const stock = parseFloat(data.stock);
        const category = data.category;
        const description = data.description;
        const sellerEmail = user.email;

        const product = {
            title, brand, imageURL, price, stock, category, description, sellerEmail
        };

        // console.log(product)

        const token = localStorage.getItem("access-token")
        console.log(token)

        axios.post("http://localhost:8000/add-products", product, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
            .then((res) => console.log(res));
    };
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-12">Add Products</h1>

            {/* now use react hock form */}

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                    {/* Row 01 */}
                    <div className="flex gap-8">

                        {/* Title */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Product Title" className="w-full p-2 border border-black rounded-md"
                                {...register('title', { required: true })}

                            />
                            {errors.title && (<p className="text-red-500 text-sm font-light">Title is required.</p>)}
                        </div>

                        {/* Brand */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Brand</span>
                            </label>
                            <input type="text" placeholder="Brand " className="w-full p-2 border border-black rounded-md"
                                {...register('brand', { required: true })}

                            />
                            {errors.brand && (<p className="text-red-500 text-sm font-light">Brand is required.</p>)}
                        </div>

                    </div>


                    {/* Row 02 */}
                    <div className="flex gap-8">

                        {/* Price */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" className="w-full p-2 border border-black rounded-md"
                                {...register('price', { required: true })}

                            />
                            {errors.price && (<p className="text-red-500 text-sm font-light">Price is required.</p>)}
                        </div>

                        {/* Stock */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Stock</span>
                            </label>
                            <input type="number" placeholder="Stock " className="w-full p-2 border border-black rounded-md"
                                {...register('stock', { required: true })}

                            />
                            {errors.stock && (<p className="text-red-500 text-sm font-light">Stock is required.</p>)}
                        </div>

                        {/* Category */}
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" placeholder="Product Category " className="w-full p-2 border border-black rounded-md"
                                {...register('category', { required: true })}

                            />
                            {errors.category && (<p className="text-red-500 text-sm font-light">Category is required.</p>)}
                        </div>

                    </div>


                    {/* Image URL */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Product Image " className="w-full p-2 border border-black rounded-md"
                            {...register('imageURL', { required: true })}

                        />
                        {errors.imageURL && (<p className="text-red-500 text-sm font-light">Image URL is required.</p>)}
                    </div>


                    {/* Row 03 */}
                    {/* Description */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea type="text" placeholder="Product Description" className="w-full p-2 border border-black rounded-md"
                            {...register('description', { required: true })}

                        />
                        {errors.description && (<p className="text-red-500 text-sm font-light">Description is required.</p>)}
                    </div>


                    {/* Add Product Button */}
                    <div className="my-8">
                        <button type="submit" className="btn btn-primary w-full">Add Product</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProducts;