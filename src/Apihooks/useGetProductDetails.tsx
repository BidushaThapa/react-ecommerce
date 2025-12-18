//useGetProductDetails
import api from "./ApiInstance"
import { URL } from "./constant.ts";
import { useQuery } from "@tanstack/react-query";
import { ProductModel } from "../types/Products/productModel.ts";
 
const fetchProductDetails = (id:string):Promise<ProductModel> => {
  return api.get(URL.getProductDetails(id));
};

export const useGetProductDeatils = (id:string) => {
  return useQuery<ProductModel,Error>({ 
    queryKey:["productDetails",id],
    queryFn:()=>fetchProductDetails(id),
  });
};
