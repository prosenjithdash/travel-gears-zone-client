// Seller Privet route

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useUserData from "../../hooks/useUserData";
import Loading from "../../pages/Loading";



const SellerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const userData = useUserData();
    const location = useLocation()

    if (loading || !userData.role) {
        return <Loading />;
    }
    if (user && userData.role === "seller") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }
    } replace />;
};

export default SellerRoute;
