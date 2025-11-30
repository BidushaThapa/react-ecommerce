//cartCard

import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { CartModel } from "../../types/Cart/cartModel";

export const CartCard = ({ product }:{product:CartModel}) => {
  const [quantity, setQuantity] = React.useState(product.quantity || 1);
  const total = product.price * (quantity || 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
 const handleDelete = () => {
    const cartItems = localStorage.getItem("cart");
    const token = localStorage.getItem("sessionId");

    if (!token) {
      console.warn("No session token found.");
      return;
    }

    const cartData: Record<string, CartModel[]> = cartItems ? JSON.parse(cartItems) : {};
    const userCart = cartData[token] || [];

    const updatedCart = userCart.filter((item) => item.id !== product.id);
    cartData[token] = updatedCart;

    localStorage.setItem("cart", JSON.stringify(cartData));

    // Temporary refresh
    window.location.reload();
  };
  //update the local storage

  return (
    <div className="grid grid-cols-6 gap-4 pb-4 mb-4  border-b-2 border-gray-200">
      <div className="col-span-3 ">
        <div className="flex gap-4">
          <img src={ Array.isArray(product.images) && product.images.length > 0 ?
             product.images[0] : '' } alt={product.title} className="w-40 h-40 object-cover rounded-md" />

          <div className="flex flex-col justify-start items-start">
            <strong>{product.title}</strong>
            <p className="text-start">{product.description}</p>
          </div>
        </div>
      </div>

      <div className="flex  items-center">$ {product.price}</div>
      <div className="flex gap-2 justify-center text-start items-center">
        <button
          onClick={decreaseQuantity}
          className="p-2 justify-center flex items-center  border-1 h-10 w-10 rounded-md bg-slate-100"
        >
          -
        </button>
        <input
          type="text"
          className="w-8 text-center outline-none"
          value={quantity}
        />
        <button
          onClick={increaseQuantity}
          className="p-2 justify-center flex items-center  border-1 h-10 w-10 rounded-md bg-slate-100"
        >
          +
        </button>
         <button
         onClick={handleDelete}
          className="p-2 justify-center flex items-center cursor-pointer border-1 h-10 w-10 rounded-md bg-amber-500"
        >
          <FaTrashCan/>
        </button>
      </div>
      <div className="flex  items-center">${total.toFixed(2)}</div>
    </div>
  );
};
