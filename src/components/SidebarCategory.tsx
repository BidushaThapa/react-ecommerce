import {Heading, Label} from "./Molecules/TextComponent"
import { useProduct } from '../store/productStore'
export const SidebarCategory =() => {

  const filters=useProduct((state)=>state.filters);
  const setFilters=useProduct((state)=>state.setFilters);
  const  SelectField=({label ,value}:{label:string ,value:string})=>{
  const isSelected=value===filters.category
  return (
    <div className='flex  mt-2 gap-4 text-black'>
      <input type="checkbox" checked={isSelected}  className="w-5 h-5 rounded-sm  border-2 "
      onChange={(event)=>{
        setFilters("category",event.target.value);
      }}
      value={value}
      />
      
      
      <Label >{label}</Label>
    </div>

  )
}

  return (
     <div>
      <Heading>Category</Heading>
      <SelectField label={"All"} value="" />
      <SelectField label={"Fragrances"} value="fragrances" />
      <SelectField label={"Furniture"} value="furniture" />
      <SelectField label={"Groceries"} value="groceries" />
    </div>
  );
 }
