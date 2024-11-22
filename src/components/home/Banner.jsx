// Banner Component
const Banner = () => {
    return (
        <div>
            <div
                className="hero w-full lg:min-h-screen min-h-[400px]"
                style={{
                    backgroundImage: "url(https://t3.ftcdn.net/jpg/08/65/95/82/360_F_865958294_MD1555H3zdKdFUAf7xWZMNG5BeINNrzv.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-[700px] ">
                        <h1 className="lg:mb-5 mb-3 text-white lg:text-5xl text-[30px] font-bold">Hey guys Welcome To Travel Gears Zone</h1>
                        <p className="lg:mb-5 mb-3">
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