import { create } from "zustand";
import { ProductModel } from "../types/Products/productModel";
interface filters {
    category: string,
    color: string,
    size: string,
    rating: number,
    title:string,
    description:string,

}

interface ProductStoreModel {
  loading :boolean,
  setLoading : (status:boolean)=>void

  productList :ProductModel[],
  setProductList:(products:ProductModel[])=>void,

  filters:filters;
  setFilters:(key:string,value:string)=>void,

  buyNowProduct:ProductModel|null,
  setBuyNowProduct:(product:ProductModel)=>void,

  addToCart:(product:ProductModel)=>void
  cartItems:ProductModel[];

}
export const useProduct = create<ProductStoreModel>()((set) => ({
  productList: [],
  loading: false,
   cartItems: [],
  buyNowProduct:null,
  selectedProduct: {},
  filters: {
    category: "",
    color: "",
    size: "",
    rating: 0,
    title:"",
    description:""
  },
  setLoading: function (status) {
    set({
      loading: status,
    });
  },
  setFilters: (key, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    }));
  },
   setProductList: (products) => {
    set({
      productList: products,
    });
  },
 
   setBuyNowProduct:(product)=>{
    set({
      
      buyNowProduct:product,
    });
  },

  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
  

}));
