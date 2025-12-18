export interface ApiModel {
    limit:number,
    page:number,
    id:string,
  category :string[],
  rating:string,
  title:string,
  description:string,
  product:Product[]
}
export interface Product{
  id:number
  title:string,
  description:string,
  category :string,
  rating:string,

  price:number,
  thumbnail?:string
}
