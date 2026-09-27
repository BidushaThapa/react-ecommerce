import { Heading, Label } from "./Molecules/TextComponent";
import { useProduct } from "../store/productStore";
export const SidebarCategory = () => {
  const filters = useProduct((state) => state.filters);
  const setFilters = useProduct((state) => state.setFilters);
  const SelectField = ({ label, value }: { label: string; value: string }) => {
    const isSelected = value === filters.category;
    return (
      <label
        className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-black transition-colors ${
          isSelected ? "bg-amber-50" : "hover:bg-amber-50"
        }`}
      >
        <input
          type="checkbox"
          checked={isSelected}
          className="h-4 w-4 rounded-sm accent-amber-500"
          onChange={(event) => {
            setFilters("category", event.target.value);
          }}
          value={value}
        />

        <Label>{label}</Label>
      </label>
    );
  };

  return (
    <div>
      <Heading>Category</Heading>
      <div className="mt-3 space-y-1">
        <SelectField label={"All"} value="" />
        <SelectField label={"Fragrances"} value="fragrances" />
        <SelectField label={"Furniture"} value="furniture" />
        <SelectField label={"Groceries"} value="groceries" />
      </div>
    </div>
  );
};