import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserDropdown from "./UserDropdown";

// Navbar Component
const Navbar = () => {
    const { user } = useAuth();
    console.log('Check user:',user)
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn border-none bg-green-500  hover:bg-green-600  text-white lg:text-xl text-[12px]">Travel Gears Zone</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                {
                    user ? (
                        <div className="navbar-end">
                            <UserDropdown />
                        </div>
                    ) :
                        <div className="navbar-end">
                            <div className="flex gap-2 items-center ">
                                <Link to='/login'>
                                <button className="btn   bg-black  text-white
                                hover:bg-gray-800   px-4 py-2 rounded-md border-black border-2">
                                        Log in
                                    </button>
                                </Link>
                                <Link to='/register'>
                                <button className="btn bg-gray-200
                                 text-black
                                 border-black border-2 px-4 py-2 rounded-md ">
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;