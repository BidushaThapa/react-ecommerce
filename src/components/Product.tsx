import camera from "../assets/camera.jpg";
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ProductModel } from '../types/Products/productModel';

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
      className="flex flex-col justify-between w-full group rounded-2xl bg-white overflow-hidden shadow-md hover:shadow-lg hover:shadow-green-200 cursor-pointer"
    >
      <div className="min-h-48">
        <img
          className=" transform transition-all duration-300 group-hover:scale-105"
          src={data.images?.[0] ?? camera}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="font-bold text-black text-sm md:text-xl">{data.title}</p>
        <p className="hidden md:text-sm  text-slate-400 truncate">{data.description}</p>

        <div className="flex justify-between">
          <p className="text-lg font-semibold group-hover:text-green-500">
            ${data.price}
          </p>
          <span className="flex items-center text-black">
            <FaStar className="text-amber-300" />
            {data.rating}/5
          </span>
        </div>

        <button
          onClick={addToCart}
          className="w-full text-white bg-black rounded-2xl px-4 py-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

