import { Heading } from "./Molecules/TextComponent";
import { useProduct } from "../store/productStore";

export const SidebarColors = () => {
  const filters = useProduct((state) => state.filters);
  const setFilters = useProduct((state) => state.setFilters);
  const colors = [
    " bg-white",
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-gray-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-lime-500",
    "bg-cyan-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-fuchsia-500",
    "bg-stone-500",
    "bg-sky-500",
    "bg-slate-500",
    "bg-neutral-500",
    "bg-zinc-500",
    "bg-blue-300",
    "bg-red-300",
  ];
  return (
    <div>
      <Heading>Colours</Heading>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {colors.map((color, i) => {
          const isSelected = color === filters.color;
          return (
            <button
              key={i}
              onClick={() => setFilters("color", color)}
              className={`w-8 h-8 rounded-full ${color} border-2 cursor-pointer
              ${isSelected ? "border-black" : "border-gray-300"} 
              transition-transform duration-200`}
              aria-label={`Select ${color.replace("bg-", "").replace("-500", "")} color`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
