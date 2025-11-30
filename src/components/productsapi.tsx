import { useEffect} from 'react'
import axios from 'axios'
import { useProduct } from '../store/productStore';
export const productsapi = () => {
  const setProductList = useProduct((state) => state.setProductList);
         const fetchProducts = async ()=>{
    let response= await axios.get("https://dummyjson.com/products");
    setProductList(response.data.products);
 } ;

 useEffect(()=>{
    fetchProducts();
 },[]);
    
   return null;
}


