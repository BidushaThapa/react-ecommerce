export type CartModel= {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  quantity?: number; // optional for BuyNow
  discountPercentage: number;
    token:string,
}
