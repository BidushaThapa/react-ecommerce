// Products.jsx
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Apihooks/useAuth";

export const Products = (props) => {
  const { isAuthenticated } = useAuth();
  const { data } = props;
  const navigate = useNavigate();

  const addToCart = (e) => {
    e.stopPropagation(); // Prevent card click

    if (!isAuthenticated()) {
      alert("Please log in to continue");
      navigate("/login");
      return;
    }

    const token = localStorage.getItem("sessionId");
    const cartItems = localStorage.getItem("cart");
    let cartData = cartItems ? JSON.parse(cartItems) : {};
    const userCart = cartData[token] || [];

    const itemIndex = userCart.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      userCart[itemIndex].quantity += 1;
    } else {
      userCart.push({ ...data, quantity: 1 });
    }

    cartData[token] = userCart;
    localStorage.setItem("cart", JSON.stringify(cartData));

    alert("Added to your Cart!");
  };

  return (
    <div className="flex flex-col justify-between group rounded overflow-hidden bg-white text-black shadow-md">
      <Link to={`/products/${data.id}`}>
        <img
          className="w-full group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          src={data.images[0]}
          alt={data.title}
        />
      </Link>

      <div className="p-4 flex flex-col gap-1">
        <Link to={`/products/${data.id}`}>
          <p className="font-bold text-xl hover:text-amber-500">{data.title}</p>
        </Link>
        <p className="text-sm text-slate-400 truncate">{data.description}</p>

        <div className="flex justify-between">
          <p className="text-lg font-semibold group-hover:text-amber-500 transition-all">
            ${data.price}
          </p>
          <span className="flex items-center">
            <FaStar className="text-amber-300" />
            {data.rating}/5
          </span>
        </div>

        <button
          onClick={addToCart}
          className="w-full text-white bg-black rounded-2xl px-4 py-2 hover:bg-amber-500 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
