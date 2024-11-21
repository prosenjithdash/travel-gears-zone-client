// Banner Component
const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/top-view-traveler-accessories-wooden-surface_23-2147950771.jpg?t=st=1732224827~exp=1732228427~hmac=7d23923e61015c01c66121312430e60b6348fff7103e0dd7c4e32620f473ad18&w=2000)",
                }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Hey guys Welcome To Travel Gears Zone</h1>
                        <p className="mb-5">
                            This online zone is yours.So take your travel gears and enjoy your tour.Don't worry we are always with you.Be safe and Travel in the world.
                        </p>
                        <button className="btn bg-green-500  hover:bg-green-600  text-white">Get Gears</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;