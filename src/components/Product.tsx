import camera from "../assets/camera.jpg";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ProductModel } from "../types/Products/productModel";
import { BlurImage } from "./ImgShimmer";
import { formatNpr } from '../lib/currency';

type Props = {
  data: ProductModel;
};

export const Product = ({ data }: Props) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/products/${data.id}`, { state: { data } });
  };

  const addToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    const cartItems = localStorage.getItem("cart");
    const cartData = cartItems ? JSON.parse(cartItems) : [];
    const index = cartData.findIndex((item: any) => item.id === data.id);

    if (index !== -1) cartData[index].quantity += 1;
    else cartData.push({ ...data, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div
      onClick={onCardClick}
      className="group flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-[#dedbd2] bg-white shadow-sm hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-square overflow-hidden bg-[#f1efe9]">
        <div className="h-full w-full">
          <BlurImage
            src={data.images?.[0] ?? camera}
            placeholder={camera}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={data.title}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="line-clamp-2 text-sm font-bold text-black md:text-base">
          {data.title}
        </p>
        <p className="line-clamp-2 text-xs text-slate-500">
          {data.description}
        </p>

        <div className="flex justify-between">
          <p className="text-lg font-semibold group-hover:text-green-500">
            {formatNpr(data.price)}
          </p>
          <span className="flex items-center text-xs text-black">
            <FaStar className="text-amber-300" />
            {data.rating}/5
          </span>
        </div>

        <button
          onClick={addToCart}
          className="w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500 hover:text-black"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
