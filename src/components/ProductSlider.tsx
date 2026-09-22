import { Link } from "react-router-dom";
import { useGetCategories } from "../Apihooks/useGetCategories";
import { ProductModel } from "../types/Products/productModel";
import { Product } from "./Product";

export const ProductSlider = ({ cat = "fragrances" }) => {
  const { data, isLoading } = useGetCategories(cat);

  if (isLoading && !data) {
    return <div>loading...</div>;
  }

  const capitalize = (value = "") =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <div className="py-8">
      <div className="flex items-end justify-between gap-4 px-1 py-4">
        <p className="text-2xl font-bold text-black">Top {capitalize(cat)}</p>
        <Link
          to={`/products/category/${cat}`}
          className="text-sm font-semibold text-amber-700 underline underline-offset-4"
        >
          Show all
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
        {data?.map((product: ProductModel, index: string) => (
          <div
            className="w-[min(72vw,260px)] shrink-0 md:w-[260px]"
            key={`${cat}-${index}`}
          >
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
