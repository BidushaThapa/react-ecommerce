import { Heading } from "./Molecules/TextComponent";
interface ColorProps {
  color:string;
  isSelected:boolean
}
const Color = ({ color ,isSelected}:ColorProps) => {
  return (
     <div
      className={`h-6 w-6 rounded-full flex justify-center items-center 
        ${color} ${isSelected ? "ring-2 ring-black" : ""}`}
    ></div>
  );
};

const colorsConf = [
  {
    isSelected: false,
    color: "bg-[#cc2727]",
  },
  {
    isSelected: true,
    color: "bg-[#3a27cc]",
  },
  {
    isSelected: false,
    color: "bg-[#3a27cc]",
  },
  {
    isSelected: false,
    color: "bg-[#a85632]",
  },
  {
    isSelected: false,
    color: "bg-[#efefef]",
  },
  {
    isSelected: false,
    color: "bg-[#cc2727]",
  },
];
export const Colors = () => {
  return (
    <div>
      <Heading>Color</Heading>
      <div className="flex gap-2 flex-wrap py-4">
        {colorsConf.map((eachcolor, index) => {
          return (
            <div key={index}>
              <Color
                isSelected={eachcolor.isSelected}
                color={eachcolor.color}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
