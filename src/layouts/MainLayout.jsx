import { Outlet } from "react-router-dom";
import Navbar from "../components/share/Navbar";
import { Footer } from "../components/share/Footer";

// MainLayout
const MainLayout = () => {
    return (
        <div className=" bg-gray-100">
            <Navbar/>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;