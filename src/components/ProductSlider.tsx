import { Link } from "react-router-dom";
import { useGetCategories } from "../Apihooks/useGetCategories";
import { ProductModel } from "../types/Products/productModel";
import {Product} from "./Product";

export const ProductSlider = ({ cat = "fragrances" }) => {
  const { data, isLoading } = useGetCategories(cat);

  if (isLoading && !data) {
    return <div>loading...</div>;
  }

  const capitalize = (value = "") =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <div className="">
      <div className="flex justify-between items-center my-4 px-4 py-4 ">

          
        <p className="text-3xl font-bold text-black text-center "> Top {capitalize(cat)}</p>
        <Link to={`/products/category/${cat}`} className="underline text-black">
          Show all
        </Link>
      </div>
      <div className="flex  gap-4 overflow-x-scroll  no-scrollbar">
        {data?.map((product:ProductModel, index:string) => (
          <div className=" max-w-72 min-w-[200px] md:w-full " id={index}>
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
