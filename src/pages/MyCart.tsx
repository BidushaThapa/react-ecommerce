//MyCart
import {
  FaArrowRight,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { CartCard } from "../components/cart/CartCard";
import { CartModel } from "../types/Cart/cartModel"; 

export const MyCart = () => {
  const cartItems = localStorage.getItem("cart");
    const token = localStorage.getItem("sessionId")

  const cartList = cartItems ? JSON.parse(cartItems) : [];
    
    const cartListForUser:CartModel[] = cartList[token]||[]


  return (
    <div className="flex flex-col gap-10 min-h-screen bg-white text-black p-6">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="flex gap-2 text-3xl font-extrabold text-gray-900 border-b-4 border-amber-500 p-2">
          <FaShoppingBag /> My Cart
        </h1>
        <p>
          <span className="font-semibold">{cartListForUser.length} items</span> in your cart
        </p>
      </div>

    <div className="grid grid-cols-4">
        {/* Body left  */}
           <div className=" col-span-3 p-10 shadow-lg rounded-4xl ">
        <div className="grid text-xl grid-cols-6 gap-6 pb-4 mb-4 font-semibold ">
          <p className="col-span-3 ">Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>


          {cartListForUser.length === 0 ? (
            <div className="flex flex-col gap-10 min-h-screen bg-white text-black p-6">
              <div className="flex justify-center items-center">
                <h1 className="flex gap-2 text-3xl font-extrabold text-gray-900 border-b-4 border-amber-500 p-2">
                  <FaShoppingBag /> My Cart
                </h1>
              </div>
              <p className="flex gap-2 justify-center text-center mt-10">
                <FaShoppingCart /> Your cart is empty!
              </p>
            </div>
          ) : (
            cartListForUser.map((product:CartModel) => (
              <CartCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* RIGHT: Shipping Summary */}
        <div className="bg-white col-span-1 flex flex-col gap-3 p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4">Calculated Shipping</h1>

          {/* Country Selection */}
          <div>
            <select className="border-2 rounded-xl px-8 py-2 w-full">
              <option className="text-gray-300">Country</option>
              <option value="">Nepal</option>
              <option value="">USA</option>
              <option value="">China</option>
              <option value="">Canada</option>
            </select>
          </div>

          {/* City Selection */}
          <div>
            <select className="border-2 rounded-xl px-8 py-2 w-full">
              <option className="text-gray-300">City/State</option>
              <option value="">Kathmandu</option>
              <option value="">Birjung</option>
              <option value="">Pokhara</option>
              <option value="">New York</option>
            </select>
          </div>

          <hr className="my-4" />

          {/* Update Button */}
          <button className="flex justify-center bg-amber-100 text-amber-500 items-center gap-2 px-6 py-2 rounded-md shadow hover:bg-amber-200 cursor-pointer">
            Update
          </button>

          <hr className="my-4" />

          {/* Order Summary */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold mb-4">Order Summary</h1>

            <div className="flex justify-between">
              <p>Cart Subtotal</p>
              {/* Placeholder for subtotal */}
            </div>

            <div className="flex justify-between">
              <p>Total Discount</p>
              {/* Placeholder for discount */}
            </div>

            <div className="flex justify-between font-bold">
              <p>Cart Total</p>
              {/* Placeholder for total */}
            </div>

            <hr className="my-4" />

            <button className="flex bg-amber-500 justify-center items-center gap-2 text-white px-4 py-2 rounded-md shadow hover:bg-amber-600 cursor-pointer">
              Go to Checkout <FaArrowRight />
            </button>
          </div>
        </div>
    </div>
      </div>
  );
};
