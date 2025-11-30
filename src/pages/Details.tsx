//detailPage
import  { useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useGetProductDeatils } from "../Apihooks/useGetProductDetails";
import {  Label } from "../components/Molecules/TextComponent";
import { FaHeart, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useProduct } from "../store/productStore";
import { useAuth } from "../Apihooks/useAuth"; 
import { CartModel } from "../types/Cart/cartModel";
import { ProductModel } from "../types/Products/productModel";

  // const updatedPrice: ProductModel = {
  //               ...discountPercentage,
  //               price:string,
  //             };
export const Details = () => {
   const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const {data , isPending:loadingProductDetails} = useGetProductDeatils(id); //send id to useGetProductdetails page and stores the productDetails sent from it in a constant name data
  const [selectedImageIndex, setSelectedImage] = useState(0);  
  const navigate= useNavigate();
  const MyCartButton= ()=>{ navigate("/mycart")}
  const originalPrice =({price,discountPercentage}:ProductModel)=> price && discountPercentage?price -(price  * (discountPercentage)/100 ) :0
   
  const setBuyNowProduct = useProduct((state) => state.setBuyNowProduct);
     
       const handleClick= ()=> {
        if (!isAuthenticated()){
          alert("Please log in to continue.")
          navigate("/login");
        }
        else
        setBuyNowProduct(data);
        navigate("/buynow");
       };
       const addToCart= ()=>{
         if (!isAuthenticated()){
          alert("Please log in to continue.")
          navigate("/login");
        }
        else
        alert("Added to cart")
    const token = localStorage.getItem("sessionId");
    const cartItems = localStorage.getItem("cart");
    let cartData = cartItems ? JSON.parse(cartItems) : {};
    const userCart = cartData[token] || [];

    const itemIndex = userCart.findIndex((item) => item.id === data.id);

    if (itemIndex !== -1) {
      userCart[itemIndex].quantity += 1;
    } else {
      userCart.push({ ...data, quantity: 1 });
    }

    cartData[token] = userCart;
    localStorage.setItem("cart", JSON.stringify(cartData));
  }
 
  
 
if (loadingProductDetails|| !data) return <>Loading...</>;

 return (
<div className="flex flex-col gap-10 min-h-screen  bg-white text-black p-6">
  
  {/* Title */}
  <div className="flex justify-center  items-center ">
  <h1 className="text-3xl font-extrabold text-gray-900 border-b-4 border-amber-500  p-2">
    {data.title}
  </h1>
 
</div>
  <hr className="my-4 " />
  <div className="gap-8 grid grid-cols-2 p-4 bg-gray-50 rounded-lg shadow-sm">

    {/* Left Image */}
    <div className="flex flex-col items-center gap-4 ">
      {data.images && data.images.length > 0 && (
        <>
          <img
            className=" w-3/4  " src={data.images[selectedImageIndex]} alt={data.title} />
                 
          <div className="flex gap-4 justify-center  bg-gray-50">
       
            {data.images.map((img, index) => (
              
              <img
              
              onClick={()=>setSelectedImage(index)}
                key={index} src={img} alt={data.title} className={`h-40 w-40 border rounded-lg shadow-sm cursor-pointer 
        ${index === selectedImageIndex ? "bg-amber-500 border-none" : "bg-white hover:border-amber-500"}`}
    />
  
            ))}
          </div>
        </>
      )}
    </div>
    {/* Right Deatils */}
    <div className="flex flex-col gap-5 p-6 bg-white rounded-lg shadow-md">
     

      <div className=" flex justify-between ">
      <div>
          <h1 className="font-semibold text-lg text-gray-800">Category:</h1>
        <p>{data.category}</p>
      </div>
       {/* <Link to="/mycart"> */}
        <button className="flex bg-amber-100 text-amber-500 items-center gap-2 px-6 py-2 rounded-md shadow hover:bg-amber-200 " onClick={MyCartButton} >
          <FaCartShopping/>
          My cart
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-lg text-gray-800">Price:</h1>
        <span className="flex gap-5 items-center mt-2">
         
          <span className="bg-amber-500 text-white font-medium rounded-md px-3 py-1">
          
            ${originalPrice({price:data.price, discountPercentage:data.discountPercentage} as ProductModel).toFixed(2)}
          </span>
           <p  className="line-through text-gray-500" >
            ${data.price}
          </p>
          <p className="bg-amber-100 text-amber-600 font-semibold rounded-md px-3 py-1">
            -{data.discountPercentage}%
          </p>
        </span>
      </div>
      <div>
        <h1 className="font-semibold text-lg text-gray-800">Brand:</h1>
        <p>{data.brand}</p>
      </div>
      <div>
        <h1 className="font-semibold text-lg text-gray-800">Product Description:</h1>
        <p>{data.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-md">
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Shipping:</h1>
          <p>{data.shippingInformation}</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Return Policy:</h1>
          <p>{data.returnPolicy}</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Availability:</h1>
          <p>{data.availabilityStatus}</p>
        </div>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Warranty:</h1>
          <p>{data.warrantyInformation}</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Label>
          <input
            className="border px-4 py-2 rounded-md shadow-sm"
            min={1}
            max={data.stock}
            type="number"
            placeholder="Quantity"
          />
        </Label>
        <button className="flex bg-amber-100 text-amber-500 items-center gap-2 px-6 py-2 rounded-md shadow hover:bg-amber-200 cursor-pointer" onClick={handleClick}
      
        >
         Buy Now
        </button>

        <button className="flex bg-amber-500 items-center gap-2 text-white px-4 py-2 rounded-md shadow hover:bg-amber-600 cursor-pointer"  onClick ={()=>addToCart()}>
          <FaCartShopping />
          Add to Cart
        </button>
          
        <button className="flex items-center gap-2 border border-amber-500 text-amber-500 px-4 py-2 rounded-md shadow hover:bg-amber-50">
          <FaHeart />
          Favourite
        </button>
      </div>
    </div>
  </div>
  {/* Ratings */}
 <h1 className="font-semibold text-2xl text-gray-900 mb-2">Rating & Reviews</h1>
<hr className="my-4 border-gray-300" />

<div className="flex gap-8 p-6 bg-white rounded-lg shadow-md">
  {/* Overall Rating Section */}
  <div className="flex flex-col items-center justify-center w-1/3 bg-gray-50 rounded-lg p-6 shadow-sm">
    <div className="flex gap-2 mb-3">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={`text-4xl ${
              starValue <= data.rating ? "text-yellow-500" : "text-gray-300"
            }`}
          />
        );
      })}
    </div>
    <p className="text-4xl font-bold text-amber-600">{data.rating}/5</p>
    <p className="text-gray-500 text-sm mt-1">Overall Rating</p>
  </div>

  {/* Individual Reviews Section */}
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 flex-1">
    {data.reviews?.map((review, index) => (
      <div
        key={index}
        className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg text-gray-800 flex justify-between items-center">
          {review.reviewerName}
          <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
        </h3>

        {/* Review Rating Stars */}
        <div className="flex items-center gap-1 my-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < review.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 text-sm">{review.rating}/5</span>
        </div>

        <p className="text-gray-700 mt-1">{review.comment}</p>
      </div>
    ))}
  </div>
</div>

</div>
 );
}

