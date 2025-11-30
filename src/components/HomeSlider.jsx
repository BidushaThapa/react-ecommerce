import React, { useState } from 'react';
import Slider1 from "../assets/slider1.webp";
import Slider2 from "../assets/slider2.webp";
import Slider3 from "../assets/slider3.webp";
import Slider4 from "../assets/slider4.webp";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const details = [
  { image: Slider1, content: "Free Delivery All over Nepal! " },
  { image: Slider2, content: "Can be returned within 30 days! " },
  { image: Slider3, content: "Pay with Secure and Fast Payment! " },
  { image: Slider4, content: "Fast, Secure & Hassle-Free Checkout " },
];

export const HomeSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageSrc = details[imageIndex].image;
  const content = details[imageIndex].content;

  const prevImage = () => {
    const index = imageIndex === 0 ? details.length - 1 : imageIndex - 1;
    setImageIndex(index);
  };

  const nextImage = () => {
    const index = imageIndex === details.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(index);
  };

   return (
    <div className="relative">
      <div className="w-full  h-[calc(100vh)] min-h-[calc(100vh-200px)] overflow-hidden">
        <img src={imageSrc} />
        <div className="absolute top-2/5 right-38">
          <p className="text-6xl font-bold text-cyan-700 text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">
            {content}
          </p>
        </div>
      </div>
      <div
        onClick={prevImage}
        className="absolute top-2/5 left-6 flex justify-center gap-4 mt-4 bg-blue-300 h-10 w-10 rounded-full items-center text-white cursor-pointer"
      >
        <FaChevronLeft />
      </div>
      <div
        onClick={nextImage}
        className="absolute top-2/5 right-6 flex justify-center gap-4 mt-4 bg-blue-300 h-10 w-10 rounded-full items-center text-white cursor-pointer"
      >
        <FaChevronRight />
      </div>
      <div className="max-w-5xl w-full mx-auto bg-white absolute bottom-[-25px] left-[17%] rounded-2xl opacity-90">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center gap-2 p-10">
            <p className="font-bold">Free Delivery </p>
            <p>Near Banepa </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-10">
            <p className="font-bold">30 Days return </p>
            <p>Near Banepa </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-10">
            <p className="font-bold">Secure Payment</p>
            <p>Near Banepa </p>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};
