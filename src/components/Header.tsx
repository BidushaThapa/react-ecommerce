import { Link, useNavigate } from "react-router-dom";
 import logo from "../assets/react.svg";

import { FaShoppingCart } from "react-icons/fa";
import { UserStore } from "../store/UserStore";
import { useAuth } from "../Apihooks/useAuth";
import { BACKEND_URL } from "../Apihooks/constant";
export const Header = () => {
  const sessionId=UserStore((state)=>state.sessionId)
  const {getUser,logout}=useAuth()
  const navigate = useNavigate();
  const loginButton = () => navigate("login");

  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/api/auth/logout`, { method: "POST" });
    } catch {
      // Backend optional; session is cleared locally regardless.
    }
    logout();
  };

  return (
      <div className="flex   flex-row  gap-6 p-4 border rounded-sm bg-black md:flex-row md:justify-between md:items-center">

      <div>
        <Link to="/products">
          <img alt="logo" src={logo} className="h-5 md:h-10 w-auto" />
        </Link>
      </div>

      <div className=" hidden md:flex justify-center  gap-8 text-white font-medium text-medium">
        <Link className="hover:text-amber-400 hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/products">
          Products
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/about">
          About Us
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/contact">
          Contact Us
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/services">
          Services
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/myblog">
          Blogs
        </Link>
        <Link className="hover:text-amber-400 hover:underline" to="/mycart">
          <FaShoppingCart size={20} title="Go To Cart" />
        </Link>
      </div>

      <div className="">
        {sessionId? (
          <div className="flex items-center  gap-3 text-white">
            <p className="text-amber-500">Hi,{getUser()?.name }!</p>
            <button
              onClick={handleLogout}
              className=" hidden md:block border-2 border-white rounded-xl px-4 py-1 hover:bg-amber-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={loginButton}
           className="hidden md:block border-2 text-white border-white rounded-xl px-4 py-1 hover:bg-amber-500"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
