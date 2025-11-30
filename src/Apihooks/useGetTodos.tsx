//useGetTodos
import axios from "axios";
import { URL } from "./constant";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = () => {
 return axios.get(URL.getTodos());

};


export const useGetTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    select: (res) => res.data.todos
  });
}

