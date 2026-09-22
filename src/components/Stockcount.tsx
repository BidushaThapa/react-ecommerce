import { Heading } from "./Molecules/TextComponent";

export const Stockcount = () => {
  return (
    <div>
      <Heading>Stock</Heading>
      <input
        type="range"
        aria-label="Minimum stock"
        className="w-full accent-amber-500"
      />
    </div>
  );
};
