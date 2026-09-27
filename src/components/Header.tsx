import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/react.svg";

import { FaShoppingCart } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { UserStore } from "../store/UserStore";
import { useAuth } from "../Apihooks/useAuth";
import { BACKEND_URL } from "../Apihooks/constant";
export const Header = () => {
  const sessionId = UserStore((state) => state.sessionId);
  const { getUser, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const loginButton = () => navigate("login");

  const links = [
    ["Home", "/"],
    ["Products", "/products"],
    ["About Us", "/about"],
    ["Contact", "/contact"],
    ["Services", "/services"],
    ["Blogs", "/myblog"],
  ];

  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/api/auth/logout`, { method: "POST" });
    } catch {
      // Backend optional; session is cleared locally regardless.
    }
    logout();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black px-4 py-3 text-white shadow-lg md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/products" aria-label="Go to products" className="shrink-0">
          <img alt="logo" src={logo} className="h-8 w-auto md:h-10" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className={`border-b-2 border-transparent py-2 hover:border-amber-400 hover:text-amber-400 ${location.pathname === href ? "border-amber-400 text-amber-400" : ""}`}
              to={href}
            >
              {label}
            </Link>
          ))}
          <Link
            className="rounded-full p-2 hover:bg-amber-500 hover:text-black"
            to="/mycart"
            aria-label="Go to cart"
          >
            <FaShoppingCart size={20} />
          </Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          {sessionId ? (
            <div className="flex items-center gap-3 text-white">
              <p className="text-amber-500">Hi,{getUser()?.name}!</p>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold hover:bg-amber-500 hover:text-black"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={loginButton}
              className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-400"
            >
              Login
            </button>
          )}
        </div>
        <button
          className="rounded-lg p-2 hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 border-t border-white/10 pt-3 md:hidden">
          {links.map(([label, href]) => (
            <Link
              key={href}
              className="rounded-lg px-3 py-2 hover:bg-amber-500 hover:text-black"
              to={href}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            className="rounded-lg px-3 py-2 hover:bg-amber-500 hover:text-black"
            to="/mycart"
            onClick={() => setIsMenuOpen(false)}
          >
            Cart
          </Link>
          {sessionId ? (
            <button
              onClick={handleLogout}
              className="rounded-lg px-3 py-2 text-left hover:bg-amber-500 hover:text-black"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={loginButton}
              className="rounded-lg px-3 py-2 text-left hover:bg-amber-500 hover:text-black"
            >
              Login
            </button>
          )}
        </nav>
      )}
    </header>
  );
};
