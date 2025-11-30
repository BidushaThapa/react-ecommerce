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
}

// export interface SearchModel {
//     event : string[]
// }