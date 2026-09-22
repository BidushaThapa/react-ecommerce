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
    <div className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#dedbd2] bg-white text-black shadow-sm hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/products/${data.id}`}>
        <div className="aspect-square overflow-hidden bg-[#f1efe9]">
          <img
            className="h-full w-full cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105"
            src={data.images[0]}
            alt={data.title}
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={`/products/${data.id}`}>
          <p className="line-clamp-2 text-sm font-bold hover:text-amber-600 md:text-base">
            {data.title}
          </p>
        </Link>
        <p className="line-clamp-2 text-xs text-slate-500">
          {data.description}
        </p>

        <div className="flex justify-between">
          <p className="text-lg font-bold group-hover:text-amber-600">
            ${data.price}
          </p>
          <span className="flex items-center text-xs">
            <FaStar className="text-amber-300" />
            {data.rating}/5
          </span>
        </div>

        <button
          onClick={addToCart}
          className="w-full rounded-lg bg-black px-2 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-500 hover:text-black"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
