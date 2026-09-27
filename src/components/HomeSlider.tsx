import { useEffect, useRef, useState } from "react";
import Slider1 from "../assets/Slider1.webp";
import Slider2 from "../assets/Slider2.webp";
import Slider3 from "../assets/Slider3.webp";
import Slider4 from "../assets/Slider4.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const details = [
  { image: Slider1, content: "Free Delivery All over Nepal! " },
  { image: Slider2, content: "Can be returned within 30 days! " },
  { image: Slider3, content: "Pay with Secure and Fast Payment! " },
  { image: Slider4, content: "Fast, Secure & Hassle-Free Checkout " },
];

export const HomeSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const scroll = useRef<HTMLDivElement>(null);
  const imageSrc = details[imageIndex].image;
  const content = details[imageIndex].content;

  const rightButton = () => {
    scroll.current?.scrollBy({ left: 400 });
  };
  const leftButton = () => {
    scroll.current?.scrollBy({ left: -400 });
  };
  const prevImage = () => {
    const index = imageIndex === 0 ? details.length - 1 : imageIndex - 1;
    setImageIndex(index);
  };

  const nextImage = () => {
    const index = imageIndex === details.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => {
        const index = prev === details.length - 1 ? 0 : prev + 1;
        return index;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scroll}
        className="h-[360px] w-full overflow-hidden sm:h-[480px] lg:h-[560px]"
      >
        <img
          src={imageSrc}
          alt={content}
          className="h-full w-full object-cover"
        />

        <div className="absolute top-2/5 right-6   md:right-24 lg:right-48 hidden md:block">
          <p className="max-w-lg text-right text-2xl font-extrabold leading-tight tracking-tight text-black drop-shadow-[0_2px_0_rgba(255,255,255,0.8)] md:text-4xl lg:text-6xl">
            {content}
          </p>
        </div>
        <div className="absolute bottom-2.5 left-1/5  block md:hidden">
          <p className="max-w-[270px] text-xl font-extrabold leading-tight tracking-tight text-black drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">
            {content}
          </p>
        </div>
      </div>

      <div
        onClick={leftButton}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/75 text-white hover:bg-amber-500 hover:text-black"
      >
        <FaChevronLeft />
      </div>

      <div
        onClick={rightButton}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/75 text-white hover:bg-amber-500 hover:text-black"
      >
        <FaChevronRight />
      </div>

      </div>
  );
};
