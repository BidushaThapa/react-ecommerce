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
      <div className="mt-4 grid grid-cols-5 gap-3">
        {colors.map((color, i) => {
          const isSelected = color === filters.color;
          return (
            <button
              key={i}
              onClick={() => setFilters("color", color)}
              className={`h-9 w-9 rounded-full ${color} cursor-pointer border transition-all
                ${
                  isSelected
                    ? "border-transparent ring-2 ring-amber-500 ring-offset-2"
                    : "border-[#dedbd2] hover:border-amber-500"
                }`}
              aria-label={`Select ${color.replace("bg-", "").replace("-500", "")} color`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};