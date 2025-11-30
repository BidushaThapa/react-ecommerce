//useGetProductDetails
import axios from "axios";
import { URL } from "./constant.ts";
import { useQuery } from "@tanstack/react-query";
 
const fetchProductDetails = (id:string) => {
  return axios.get(URL.getProductDetails(id));
};

export const useGetProductDeatils = (id:string) => {
  return useQuery({
    queryKey:["productDetails",id],
    queryFn:()=>fetchProductDetails(id),
    select:(data)=>data.data
  });
};
