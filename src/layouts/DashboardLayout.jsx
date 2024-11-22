import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

// Dashboard Layout
const DashboardLayout = () => {
    return (
        <div className="grid lg:grid-cols-12">
            {/* Sidebar */}
            <div className="col-span-2">
                <Sidebar />
            </div>

            {/* Outlet */}
            <div className="col-span-10 p-12">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;