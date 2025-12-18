import { useEffect, useState } from 'react';
import Slider1 from "../assets/Slider1.webp";
import Slider2 from "../assets/Slider2.webp";
import Slider3 from "../assets/Slider3.webp";
import Slider4 from "../assets/Slider4.webp";
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

  useEffect(() => {
    setInterval(() => {
      setImageIndex((prev) => {
        const index = prev === details.length - 1 ? 0 : prev + 1;
        return index;
      });
    }, 4000);
  }, []);

  return (
    <div className="relative">
      <div className="w-full min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[600px] overflow-hidden">
        <img src={imageSrc} className=' object-cover' />
        
        <div className="absolute top-2/5 right-6   md:right-24 lg:right-48 hidden md:block">
         <p className="text-sm md:text-4xl lg:text-6xl font-bold text-cyan-700 text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">
              {content}
            </p>
        </div>
         <div className="absolute bottom-2.5 left-1/5  block md:hidden">
            <p className="text-sm md:text-4xl lg:text-6xl font-bold text-cyan-700 text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;">
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

      <div className=" max-w-5xl hidden md:block w-full mx-auto bg-white text-black absolute bottom-[-25px] left-[17%] rounded-2xl opacity-85 ">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center gap-2 p-8">
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
