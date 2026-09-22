//productlisting
import { useProduct } from "../store/productStore";
import { Products } from "../Products";
import { useGetProduct } from "../Apihooks/useGetProduct";
import { useState } from "react";
import { Product } from "../types/API/apiModel";

export const ProductListing = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProduct(page);
  const filters = useProduct((state) => state.filters);

  const filteredProducts = data?.products?.filter(
    (product: Product) =>
      (filters.category == "" ? true : product.category === filters.category) &&
      (filters.rating === 0
        ? true
        : parseInt(product.rating) === filters.rating) &&
      (filters.title === ""
        ? true
        : product.title.toLowerCase().includes(filters.title.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.title.toLowerCase())),
  );
  const pageNumbers = [1, 2, 3, 4, 5];
  if (isLoading)
    return (
      <div className="flex min-h-[50vh] w-full items-center justify-center text-sm text-slate-500">
        Loading products...
      </div>
    );
  return (
    <div className="min-h-screen w-full">
      <div className="col-span-5 ">
        <div className="grid grid-cols-2 gap-3 p-4 sm:gap-5 sm:p-6 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {filteredProducts?.map((product: Product) => (
            <Products key={product.id} data={product} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2 p-6">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="rounded-lg border border-[#dedbd2] bg-white px-3 py-2 text-sm font-semibold hover:border-amber-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>
          {pageNumbers.map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`rounded-lg border border-[#dedbd2] px-3 py-2 text-sm font-semibold ${
                page === num
                  ? "bg-amber-500 text-black"
                  : "bg-white hover:border-amber-500"
              }`}
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => p + 1)}
            className="cursor-pointer rounded-lg border border-[#dedbd2] bg-white px-3 py-2 text-sm font-semibold hover:border-amber-500"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
