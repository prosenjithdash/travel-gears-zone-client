
const ProductCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.freepik.com/free-photo/travel-still-life-collection_23-2148837283.jpg?t=st=1732225448~exp=1732229048~hmac=584ae945fdb2bc13dcb7fea9a00b9bde1c15567ac5eb33c0dbf9235cfcbd8cf5&w=1800"
                    alt="Beg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Monitor
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>This monitor is gaming based.If you like game then you must buy that.</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Mac</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;