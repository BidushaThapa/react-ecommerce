import { Heading } from "./Molecules/TextComponent";

const SizeButton = ({ isSelected, label }:{ isSelected:boolean, label:string }) => {
  return (
    <div
      className={`h-10 w-10 rounded-xl bg-slate-200 text-black flex justify-center items-center ${
        isSelected ? "bg-green-700" : ""
      }`}
    >
      {label}
    </div>
  );
};
const sizes = [
  {
    isSelected: false,
    label: "SM",
  },
  {
    isSelected: true,
    label: "M",
  },
  {
    isSelected: false,
    label: "L",
  },
  {
    isSelected: false,
    label: "XL",
  },
  {
    isSelected: false,
    label: "XXL",
  },
  {
    isSelected: false,
    label: "3XL",
  },
];
export const Size = () => {
  return (
    <div>
      <Heading>Size</Heading>
      <div className="flex gap-2 flex-wrap py-4">
        {sizes.map((eachsize, index) => {
          return (
            <div key={index}>
              <SizeButton
                isSelected={eachsize.isSelected}
                label={eachsize.label}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
