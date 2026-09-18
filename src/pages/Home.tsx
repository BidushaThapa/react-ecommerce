
import { HomeSlider } from "../components/HomeSlider";
import { ProductSlider } from "../components/ProductSlider";


export const Home = () => {

  
  return (
     
      <div className="" >
     
          <HomeSlider /> 
      <div className="max-w-5xl w-full mx-auto bg-white mt-0   rounded-sm ">

        <ProductSlider/>
        <ProductSlider cat={"smartphones"}/>
        <ProductSlider cat={"groceries"}/>
        <ProductSlider cat={"furniture"}/>
</div>
       </div>

    )
  

}
