import { HomeSlider } from "../components/HomeSlider";
import { ProductSlider } from "../components/ProductSlider";


export const Home = () => {

  
  return (
     
      <div className=" relative bg-amber-700">
     
         <div className=" flex  justify-center items-center font-medium h-screen text-2xl text-amber-300">
          <HomeSlider /> 
        </div>
              <ProductSlider/> 
       </div>

    )
  

}
