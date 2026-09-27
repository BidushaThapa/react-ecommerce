import { HomeSlider } from "../components/HomeSlider";
import { ProductSlider } from "../components/ProductSlider";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f3]">
      <HomeSlider />
      <div className="mx-auto mt-0 w-full max-w-7xl bg-white px-4 pb-10 sm:px-6 lg:px-8">
        <ProductSlider />
        <ProductSlider cat={"smartphones"} />
        <ProductSlider cat={"groceries"} />
        <ProductSlider cat={"furniture"} />
      </div>
    </div>
  );
};
