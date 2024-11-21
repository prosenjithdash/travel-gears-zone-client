import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import { Footer } from "../components/share/Footer";

// MainLayout
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-[350px] lg:container mx-auto ">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;