import useAuth from "../../hooks/useAuth";

// Dashboard Overview
const Overview = () => {
    const { user } = useAuth();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div>
                <img className="w-[250px] h-[250px] border-4 border-blue-600 rounded-[300px]  items-center" src={user.photoURL} alt="" />
            </div>

            <p className="text-xl font-bold text-center p-12">{user.email}</p>

        </div>
    );
};

export default Overview;