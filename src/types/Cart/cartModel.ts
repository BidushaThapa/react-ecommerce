export type CartProduct= {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  quantity: number; // optional for BuyNow
  discountPercentage: number;
    token:string,
}

export interface CartData{
  [key : string]:CartProduct[]
}