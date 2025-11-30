import { Heading, Label } from './Molecules/TextComponent'
import { useProduct } from '../store/productStore';

const sizes = ["S", "M", "XL", "XXL", "XXXL"]

export const Size = () => {
  const filters=useProduct((state)=>state.filters);
    const setFilters=useProduct((state)=>state.setFilters);
  return (
    <div>
      <Heading>Size</Heading>
      <div className="flex gap-2 mt-2 flex-wrap">
        {sizes.map((size, i) => {
          const isSelected=size===filters.size;
          return(
            <div 
            key={i} 
            onClick={()=>setFilters("size",size)}
            className={`flex px-2 py-0.5 border rounded cursor-pointer 
                ${isSelected ? "bg-amber-500 text-white font-bold" : "text-black "}`}
            >
          <Label >
                       {size}
           
          </Label>
          </div>
        )
})}
      </div>
    </div>
  )
}
