import { Link, useNavigate } from "react-router-dom";
// import {logo} from "../assets/react.svg";
import { FaShoppingCart } from "react-icons/fa";
import { UserStore } from "../store/UserStore";
import { useAuth } from "../Apihooks/useAuth";
export const Header = () => {
  const sessionId=UserStore((state)=>state.sessionId)
  const {getUser,logout}=useAuth()
  const navigate = useNavigate();
  const loginButton = () => navigate("login");

  return (
    <div className="flex justify-between items-center p-4 bg-amber-black border-1 rounded-xl mb-3">
      <div>
        <Link to="/">
          <img alt="logo" className="h-10 w-auto" />
        </Link>
      </div>

      <div className="flex justify-center gap-8 text-white font-medium text-medium">
        <Link className="hover:text-amber-400 hover:underline" to="/">
          Home
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

      <div>
        {sessionId? (
          <div className="flex items-center gap-3 text-white">
            <p className="text-amber-500">Hi,{getUser()?.name }!</p>
            <button
              onClick={logout}
              className="border-2 border-white rounded-xl px-4 py-1 hover:bg-amber-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={loginButton}
            className="border-2 border-white rounded-xl px-4 py-1 hover:bg-amber-500"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
