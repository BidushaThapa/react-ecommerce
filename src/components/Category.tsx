import { Heading, Label } from "./Molecules/TextComponent";
interface CategoryProps{
  setFilterObj:(obj:{category:string})=>void;
  filterObj:{category:string}

} 
 interface SelectFieldProps {
    label: string;
    value: string;
  }
  export const Category = ({ setFilterObj, filterObj }: CategoryProps) => {

  const SelectField = ({ label, value}:SelectFieldProps) => {
    const isSelected = value === filterObj.category;
    return (
      <div className="flex gap-4 py-2 pl-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(event) => {
            setFilterObj({ category: event.target.value });
          }}
          value={value}
        />
        <Label>{label}</Label>
      </div>
    );
  };
  return (
    <div>
      <Heading>Category</Heading>
      <SelectField label={"All"} value="" />
      <SelectField label={"Fragrances"} value="fragrances" />
      <SelectField label={"Furniture"} value="furniture" />
      <SelectField label={"Groceries"} value="groceries" />
    </div>
  );
};
