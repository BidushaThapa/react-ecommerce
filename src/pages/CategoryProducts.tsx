import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../components/Product";
import { useGetCategories } from "../Apihooks/useGetCategories";
import { ProductModel } from "../types/Products/productModel";
const CategoryProducts = () => {
  const [page, setPage] = useState(1);
  const { cat } = useParams();
  const { data, isLoading: loading } = useGetCategories(cat);

  //const productList =data.products
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (loading)
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center text-sm text-slate-500">
        Loading products...
      </div>
    );
  return (
    <div className="min-h-screen w-full">
      {/* <div className="hidden md:block bg-white col-span-1 p-4">
      </div> */}
      <div className="text-black">
        <div className="grid grid-cols-2 gap-3 p-4 sm:gap-5 sm:p-6 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {data?.map((product: ProductModel) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
        {/* <div className="flex justify-center items-center gap-4 my-4">
          <button onClick={() => setPage(1)}>1</button>
          <button onClick={() => setPage(2)}>2</button>
          <button onClick={() => setPage(3)}>3</button>
          <button onClick={() => setPage(4)}>4</button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryProducts;
