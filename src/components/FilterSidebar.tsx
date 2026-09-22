import { SidebarColors } from "./SidebarColors";
import { Size } from "./SidebarSize";
import { SidebarCategory } from "./SidebarCategory";
import { Rating } from "./Ratings";
import { Stockcount } from "./Stockcount";
import { Searchbar } from "./Searchbar";

export const FilterSidebar = () => {
  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto px-5 py-6 no-scrollbar">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          Refine selection
        </p>
        <h2 className="mt-1 text-2xl font-bold text-[#181818]">Shop filters</h2>
      </div>
      <Searchbar />
      <SidebarCategory />
      <Size />
      <SidebarColors />
      <Stockcount />
      <Rating />
    </div>
  );
};
