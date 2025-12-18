// types/Products/productModel.ts

export interface ProductModel {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  color: string;
  size: string;
  images: string[];
  shippingInformation:string;
  returnPolicy:string;
  availabilityStatus:string;
  warrantyInformation:string;
  reviews:Review[]
}
export interface Filters {
    category: string;
    color: string;
    size: string;
    rating: number;
    title:string;
    description:string;

}
export interface Review {
  reviewerName: string;
  date: string;
  rating: number;
  comment: string;
}
// export interface SearchModel {
//     event : string[]
// }