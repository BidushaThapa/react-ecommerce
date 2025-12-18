//productlisting
import { useProduct } from "../store/productStore";
import { Products } from "../Products";
import { useGetProduct } from "../Apihooks/useGetProduct";
import { useState } from "react";
import {  Product } from "../types/API/apiModel";


export const ProductListing = () => {
  const [page,setPage]=useState(1)
  const {data , isLoading}=   useGetProduct(page);
  const filters = useProduct((state) => state.filters);


  const filteredProducts = data?.products?.filter((product: Product) =>
    ( filters.category == ""?true : product.category === filters.category )&&
   (filters.rating=== 0 ?true: parseInt(product.rating)===filters.rating) &&
( filters.title === ""? true
  : product.title.toLowerCase().includes(filters.title.toLowerCase()) ||
    product.description.toLowerCase().includes(filters.title.toLowerCase()))
);
const pageNumbers=[1,2,3,4,5]
 if (isLoading)
  return (
<div className="w-full h-full flex justify-center items-center">Loading....</div>
  )
  return (
    <div className="grid grid-cols-5 h-[92%]">
     
      <div className="col-span-5 ">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-2 p-5 mt-0">
          {filteredProducts?.map((product:Product) => (
            <Products key={product.id} data={product} />
          ))}
        </div>
        <div className="flex justify-center gap-2 p-4">
          <button 
            disabled={page === 1} 
            onClick={() => setPage((p) => p - 1)} 
            className="px-3 py-1 border rounded mr-2 cursor-pointer"
          >
            Prev
          </button>
           {pageNumbers.map((num) => (
    <button
      key={num}
      onClick={() => setPage(num)}
      className={`px-3 py-1 border rounded ${
        page === num ? "bg-blue-500 text-white" : ""
      }`}
    >
      {num}
    </button>
  ))}
          <button 
            onClick={() => setPage((p) => p + 1)} 
            className="px-3 py-1 border rounded cursor-pointer"
            
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
