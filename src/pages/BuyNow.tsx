//BuyNow
import { FaArrowRight, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import { useProduct } from '../store/productStore';
import { CartModel } from '../types/Cart/cartModel';

export const BuyNow = () => {
  const buyNowProduct= useProduct((state) => state.buyNowProduct);

  const Subtotal = (price:number, discountPercentage:number) =>
    price - (price * discountPercentage) / 100;

  if (!buyNowProduct) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-amber-500">
        <h2 className="text-2xl font-semibold">No product selected for Buy Now.</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 min-h-screen bg-white text-black p-6">
      {/* Title */}
      <div className="flex justify-center items-center">
        <h1 className="flex gap-2 text-3xl font-extrabold text-gray-900 border-b-4 border-amber-500 p-2">
          <FaShoppingBag /> Buy Now
        </h1>
      </div>

      {/* Body */}
      <div className="grid grid-cols-4 gap-8">
        {/* LEFT: Product Info */}
        <div className="bg-gray-100 col-span-3 p-4 rounded-lg shadow-sm">
          <div className="grid gap-2 grid-cols-4 border-b-2 p-2 font-semibold text-gray-700 mb-4">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>

          <div className="grid grid-cols-4 gap-2 items-center border-b-1 py-4">
            {/* Product Image + Title */}
            <div className="flex items-center gap-2">
              <img
                src={
                  Array.isArray(buyNowProduct.images) && buyNowProduct.images.length > 0
                    ? buyNowProduct.images[0]
                    : ''
                }
                alt={buyNowProduct.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <p className="font-medium">{buyNowProduct.title}</p>
            </div>

            {/* Price */}
            <p>${buyNowProduct.price}</p>

            {/* Quantity */}
            <div className="flex gap-2 items-center">
              <span className="border p-1.5 rounded-lg cursor-pointer">
                <FaPlus />
              </span>
              <p>1</p>
              <span className="border p-1.5 rounded-lg cursor-pointer">
                <FaMinus />
              </span>
            </div>

            {/* Total */}
            <p>
              $
              {Subtotal(buyNowProduct.price, buyNowProduct.discountPercentage).toFixed(2)}
            </p>
          </div>
        </div>

        {/* RIGHT: Summary */}
        <div className="bg-white col-span-1 flex flex-col gap-3 p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-semibold mb-4">Order Summary</h1>

          <div className="flex justify-between">
            <p>Cart Subtotal</p>
            <p> ${buyNowProduct.price}</p>
          </div>

          <div className="flex justify-between">
            <p>Discount</p>
            <p>{buyNowProduct.discountPercentage}%</p>
          </div>

          <div className="flex justify-between font-bold">
            <p>Cart Total</p>
               <p> ${Subtotal(
                buyNowProduct.price,
                buyNowProduct.discountPercentage
              ).toFixed(2)}</p>
          </div>

          <hr className="my-4" />

          <button className="flex bg-amber-500 justify-center items-center gap-2 text-white px-4 py-2 rounded-md shadow hover:bg-amber-600 cursor-pointer">
            Buy Now <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
