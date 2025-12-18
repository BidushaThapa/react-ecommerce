
import { HomeSlider } from "../components/HomeSlider";
import { ProductSlider } from "../components/ProductSlider";


export const Home = () => {

  
  return (
     
      <div className="" >
     
          <HomeSlider /> 
      <div className="max-w-5xl w-full mx-auto bg-white  bottom-[-25px] left-[17%] rounded-2xl ">

        <ProductSlider/>
        <ProductSlider cat={"smartphones"}/>
        <ProductSlider cat={"groceries"}/>
        <ProductSlider cat={"furniture"}/>
</div>
       </div>

    )
  

}
