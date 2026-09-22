//MyCart
import { FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { CartCard } from "../components/cart/CartCard";
import { CheckoutButton } from "../components/CheckoutButton";
import { CartProduct } from "../types/Cart/cartModel";

export const MyCart = () => {
  const cartItems = localStorage.getItem("cart");
  const token = localStorage.getItem("sessionId");

  const cartList: Record<string, CartProduct[]> = cartItems
    ? JSON.parse(cartItems)
    : {};

  const cartListForUser: CartProduct[] = token ? cartList[token] || [] : [];
  const cartSubtotal = cartListForUser.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
  const cartTotal = cartListForUser.reduce(
    (total, product) =>
      total +
      product.price * (1 - product.discountPercentage / 100) * product.quantity,
    0,
  );
  const totalDiscount = cartSubtotal - cartTotal;

  return (
    <div className="flex min-h-screen flex-col gap-5 bg-[#f8f7f3] p-4 text-black md:gap-10 md:p-8">
      {/* Title */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="flex gap-2 text-xl md:text-3xl font-extrabold text-gray-900 border-b-4 border-amber-500 p-2">
          <FaShoppingBag /> My Cart
        </h1>
        <p>
          <span className="font-semibold">{cartListForUser.length} items</span>{" "}
          in your cart
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4">
        {/* Body left  */}
        <div className="col-span-3 rounded-xl border border-[#dedbd2] bg-white p-3 shadow-sm md:p-8">
          <div className="  hidden md:grid  text-xl grid-cols-6 gap-6 pb-4 mb-4 font-semibold ">
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
            cartListForUser.map((product: CartProduct) => (
              <CartCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* RIGHT: Shipping Summary */}
        <div className="col-span-1 flex flex-col gap-3 rounded-xl border border-[#dedbd2] bg-white p-6 shadow-sm">
          <h1 className="text-xl font-semibold mb-4">Calculated Shipping</h1>

          {/* Country Selection */}
          <div>
            <select className="w-full rounded-lg border border-[#dedbd2] px-4 py-2">
              <option className="text-gray-300">Country</option>
              <option value="">Nepal</option>
              <option value="">USA</option>
              <option value="">China</option>
              <option value="">Canada</option>
            </select>
          </div>

          {/* City Selection */}
          <div>
            <select className="w-full rounded-lg border border-[#dedbd2] px-4 py-2">
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
              <p>NPR {cartSubtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between">
              <p>Total Discount</p>
              <p>NPR {totalDiscount.toFixed(2)}</p>
            </div>

            <div className="flex justify-between font-bold">
              <p>Cart Total</p>
              <p>NPR {cartTotal.toFixed(2)}</p>
            </div>

            <hr className="my-4" />

            <CheckoutButton
              totalAmount={cartTotal}
              purchaseOrderId={`cart-${token || "guest"}`}
              purchaseOrderName="Ohho Cart Order"
              label="Go to Checkout"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
