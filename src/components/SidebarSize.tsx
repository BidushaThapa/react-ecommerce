import { Heading, Label } from "./Molecules/TextComponent";
import { useProduct } from "../store/productStore";

const sizes = ["S", "M", "XL", "XXL", "XXXL"];

export const Size = () => {
  const filters = useProduct((state) => state.filters);
  const setFilters = useProduct((state) => state.setFilters);
  return (
    <div>
      <Heading>Size</Heading>
      <div className="mt-4 flex flex-wrap gap-3">
        {sizes.map((size, i) => {
          const isSelected = size === filters.size;
          return (
            <button
              type="button"
              key={i}
              onClick={() => setFilters("size", size)}
              className={`flex rounded-lg border px-4 py-1.5 text-sm transition-colors cursor-pointer ${
                isSelected
                  ? "border-amber-500 bg-amber-500 font-semibold text-white"
                  : "border-[#dedbd2] bg-white text-black hover:border-amber-500"
              }`}
            >
              <Label>{size}</Label>
            </button>
          );
        })}
      </div>
    </div>
  );
};