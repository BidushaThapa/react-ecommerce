import { ReactNode } from "react";
import { SidebarColors } from "./SidebarColors";
import { Size } from "./SidebarSize";
import { SidebarCategory } from "./SidebarCategory";
import { Rating } from "./Ratings";
import { Stockcount } from "./Stockcount";
import { Searchbar } from "./Searchbar";

const FilterCard = ({ children }: { children: ReactNode }) => (
  <div className="rounded-xl border border-[#dedbd2] bg-white p-5 shadow-sm">
    {children}
  </div>
);

export const FilterSidebar = () => {
  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto px-4 py-6 no-scrollbar">
      <div className="px-1">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
          Refine selection
        </p>
        <h2 className="mt-1 text-2xl font-extrabold text-[#181818]">
          Shop filters
        </h2>
      </div>
      <Searchbar />
      <FilterCard>
        <SidebarCategory />
      </FilterCard>
      <FilterCard>
        <Size />
      </FilterCard>
      <FilterCard>
        <SidebarColors />
      </FilterCard>
      <FilterCard>
        <Stockcount />
      </FilterCard>
      <FilterCard>
        <Rating />
      </FilterCard>
    </div>
  );
};