import { Outlet } from "react-router-dom";

// MainLayout
const MainLayout = () => {
    return (
        <div>
            Navbar
            <Outlet />
            footer
        </div>
    );
};

export default MainLayout;