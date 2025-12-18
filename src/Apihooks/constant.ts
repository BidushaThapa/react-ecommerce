//constant.js

import { ProductQuery } from "./useGetProduct";

export const BASEURL = "https://dummyjson.com";

export const URL = {
  getProducts: (updatedPage: ProductQuery)  => {
    let page = updatedPage.page;
    let limit = updatedPage.limit??10

    const skip = (page - 1) * limit;
    return `${BASEURL}/products?limit=${limit}&skip=${skip}`;
  },
  getProductDetails: (id:string) => `${BASEURL}/products/${id}`,
  getTodos: () => `${BASEURL}/todos/`,
  getSlider: (category:string) => `${BASEURL}/products/category/${category}`
};
export const users =[
{
    name:'Bidusha',
    email:"xyza@gmail.com",
    password:"Secure!Pass123",
    token:'adjfklj4lw;34rj9difnfoai03fp30fodsnojf3'
},
{
    name:'Bidusha',
    email:"xyzb@gmail.com",
    password:"12345@Ab",
    token:'kajsdf78njoshdf;5+551654affe;34rj9difnfoai03fp30fodsnojf3'

},{
    name:'Rashant',
    email:"xyzc@gmail.com",
    password:"12345",
        token:'kajsdf78njoshdf;5+551654affe;dfasdsdfsdfsdfsdfsefwefwf23fe'

},
]