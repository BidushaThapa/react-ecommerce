import { useNavigate } from "react-router-dom";
import { Products } from "../Products";
import { useGetCategories } from "../Apihooks/useGetCategories";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductModel } from "../types/Products/productModel";

export const ProductSlider = () => {
  const { data: fragranceProducts, isLoading, error } = useGetCategories("fragrances");
  const { data: smartPhoneProducts, isLoading: isSmartPhoneLoading, error: smartPhoneError } = useGetCategories("smartphones");

  const navigate = useNavigate();
  const showAll = () => navigate("products");
 const [fragnanceIndex,setFragnanceIndex]=useState(0)
 const [smartPhoneIndex,setSmartPhoneIndex]=useState(0)
 const productsPerView=4
 const nextView =()=>{
    if (fragranceProducts && fragnanceIndex+productsPerView < fragranceProducts.length){
        setFragnanceIndex(fragnanceIndex+productsPerView)
    }
 }
  const prevView =()=>{
    if ( fragnanceIndex- productsPerView >=0){
        setFragnanceIndex(fragnanceIndex-productsPerView);
    }
 }
  const nextPhoneView =()=>{
    if (smartPhoneProducts && smartPhoneIndex+productsPerView < smartPhoneProducts.length){
        setSmartPhoneIndex(smartPhoneIndex+productsPerView)
    }
 }
  const prevPhoneView =()=>{
    if ( smartPhoneIndex- productsPerView >=0){
        setSmartPhoneIndex(smartPhoneIndex-productsPerView);
    }
 }
  return (
       <div className="flex flex-col gap-10 max-w-5xl w-full mx-auto bg-white absolute left-[17%] rounded-2xl opacity-90 p-6">

      {/* Fragrance Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black text-center w-full">Top Fragrances</h2>
          <div className="ml-4">
            <button
              className="text-black bg-white rounded-lg px-4 py-2 border border-black cursor-pointer hover:bg-amber-500"
              onClick={showAll}
            >
              Show All
            </button>
          </div>
        </div>

        {isLoading && <p className="text-center">Loading fragrances...</p>}
        {error && <p className="text-center text-red-500">Failed to load fragrances.</p>}

        <div className="relative">
          {/* Slider buttons */}
          <button
            onClick={prevView}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
            disabled={fragnanceIndex === 0}
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2 justify-center">
            {fragranceProducts
              ?.slice(fragnanceIndex, fragnanceIndex + productsPerView)
              .map((product :ProductModel) => (
                <div key={product.id} className="w-[250px]">
                  <Products data={product} />
                </div>
              ))}
          </div>

          <button
            onClick={nextView}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
            disabled={
              fragranceProducts &&
             fragnanceIndex + productsPerView >= fragranceProducts.length
            }
          >
            <FaChevronRight />
          </button>
        </div>
      </div>



      {/* Smartphones Section */}
       <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-black text-center w-full">Top Smartphones</h2>
          <div className="ml-4">
            <button
              className="text-black bg-white rounded-lg px-4 py-2 border border-black cursor-pointer hover:bg-amber-500"
              onClick={showAll}
            >
              Show All
            </button>
          </div>
        </div>

        {isSmartPhoneLoading && <p className="text-center">Loading smartphones...</p>}
        {smartPhoneError && <p className="text-center text-red-500">Failed to load fragrances.</p>}

        <div className="relative">
          {/* Slider buttons */}
          <button
            onClick={prevPhoneView}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
           
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-2 justify-center">
            {smartPhoneProducts
              ?.slice(smartPhoneIndex, smartPhoneIndex + productsPerView)
              .map((product:ProductModel) => (
                <div key={product.id} className="w-[250px] flex-shrink-0">
                  <Products data={product} />
                </div>
              ))}
          </div>

          <button
            onClick={nextPhoneView}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 text-white p-2 rounded-full z-10"
           
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
