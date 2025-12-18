//useGetCategories
import axios from "axios";
import {  URL } from "./constant";
import { useQuery } from "@tanstack/react-query";

const fetchCategory = (category:string) => {

 return axios.get(URL.getSlider(category)+ `?limit=10`);

};


export const useGetCategories = (category?: string) => {
  return useQuery({
    queryKey: ["products-by-category", category],
    queryFn: () => fetchCategory(category!),
    select: (res) => res.data.products,
    enabled: !!category, // only run if category exists
  });
};

 


