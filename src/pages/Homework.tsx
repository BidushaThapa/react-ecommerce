import {  useMemo, useState } from "react";
import image from "../assets/PizzaBg.webp";
import pizza from "../assets/PizzaImg.png";
import pizza1 from "../assets/wholePizza.png";
import pizza2 from "../assets/wholePizza2.png";
import pizza3 from "../assets/pizza3.webp";
import pizza4 from "../assets/pizza4.webp";

export const Homework = () => {
  const Image = [
    {
      image: pizza1,
      content:
        "A whole pepperoni pizza with a golden-brown crust. The pizza is topped with melted cheese and evenly spread slices of pepperoni. It has a classic, appetizing look, perfect for sharing or enjoying as a meal.",
    },
    {
      image: pizza,
      content:
        "This is a gourmet seafood pizza topped with a vibrant mix of shrimp, squid, mussels, spinach, red onions, and sliced red chili on a tomato-based sauce. The crust is wood-fired, giving it a beautifully charred, rustic appearance. Fresh herbs and melted mozzarella complete the dish, adding aroma and richness to this Mediterranean-inspired creation.",
    },
      {
      image: pizza2,
      content:
        "A fresh and vibrant Margherita-style pizza topped with creamy mozzarella, juicy cherry tomatoes in red and yellow, and aromatic basil leaves. The crust is perfectly charred and airy, giving it that authentic Neapolitan look and flavor.",
    },
     {
      image: pizza3,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolor cumque. Numquam culpa quos perferendis ex autem cumque. Quae, tempora expedita enim vero incidunt temporibus! Aliquam alias placeat, asperiores quam unde inventore accusantium doloremque! Vel totam incidunt vero necessitatibus ut, expedita sunt autem. Earum tenetur omnis fugiat minus eos nam iure inventore animi dolor. Facilis sint aspernatur nesciunt deleniti vitae nulla id voluptas odio voluptatum ."
    },
     {
      image: pizza4,
      content: " This is the fourth pizza .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolor cumque. Numquam culpa quos perferendis ex autem cumque. Quae, tempora expedita enim vero incidunt temporibus! Aliquam alias placeat, asperiores quam unde inventore accusantium doloremque! Vel totam incidunt vero necessitatibus ut, expedita sunt autem."
    }
  ];
 
  const [rotateImg, setRotateImg] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);
const [bgColor, setBgColor] = useState("red");


  const currentImage = useMemo(() => Image[rotateImg], [rotateImg]);
  const handleClick = () => {
    setRotateDeg((prev) => prev + 360);
    setTimeout(()=>{
setRotateImg((prev)=>(prev+1) % Image.length)
    },300)
 
  };
  //  call back function
    const colorChange =(color)=>{
setBgColor(color);
    }
  return (
      <div className="    relative h-screen w-full overflow-hidden">
        <div  className="absolute top-0 left-0 h-full w-full object-cover" >
          <img
            src={image}
            alt="PHOTO"
          />
        </div>
        <div className="absolute top-[10%] w-full flex flex-col items-center text-center px-8">
          <h1 className="text-white font-bold text-3xl mb-4">Pizza</h1>
          <p className="text-xl text-white max-w-3xl">
            {currentImage.content}
          </p>
            <div>
     <div className="text-white border-white-2 p-4 rounded" style={{ backgroundColor: bgColor }}>
  hello
</div> 
         <input className="border-white rounded border-2" type="text" value={bgColor}    onChange={(e) => colorChange(e.target.value)}/> 
      </div>
        </div>
      

      <div className="  h-150 w-150 absolute top-[40%] left-[32%] overflow-y-hidden overflow-x-hidden transition-transform ">
        <img
          className="cursor-pointer transition-transform duration-700"
          style={{ transform: `rotate(${rotateDeg}deg)` }}
          src={currentImage.image}
          alt=""
          onClick={handleClick}
        />
      </div>
    
    </div>
  );
};
