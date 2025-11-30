//useGetProduct 

import axios from "axios";
import { URL } from "./constant";
import { useQuery } from "@tanstack/react-query";

export type ProductQuery = {
  page: number;
  limit?: number;
};

const fetchProduct = (productQuery:ProductQuery) => {
productQuery.limit=12;
  return axios.get(URL.getProducts(productQuery));
};

export const useGetProduct = (page: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchProduct({ page }),
    select: (res) => res.data,
  });
};




