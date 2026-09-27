import { Heading } from "./Molecules/TextComponent";

export const Stockcount = () => {
  return (
    <div>
      <Heading>Stock</Heading>
      <input
        type="range"
        aria-label="Minimum stock"
        className="mt-4 w-full accent-amber-500"
      />
      <div className="mt-2 flex justify-between text-xs text-[#8b8982]">
        <span>Min</span>
        <span>Max</span>
      </div>
    </div>
  );
};