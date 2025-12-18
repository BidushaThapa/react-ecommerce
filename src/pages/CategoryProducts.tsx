import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Product} from "../components/Product"
import { useGetCategories } from "../Apihooks/useGetCategories";
import { ProductModel } from "../types/Products/productModel";
const CategoryProducts = () => {
      const [page,setPage]=useState(1)
      const { cat } = useParams();
      const {data , isLoading:loading}=   useGetCategories(cat);

      //const productList =data.products
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        Loading...
      </div>
    );
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 h-[92%]">
      {/* <div className="hidden md:block bg-white col-span-1 p-4">
      </div> */}
      <div className="col-span-5 bg-white text-black">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1 bg-black p-8">
          
         
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


export default CategoryProducts