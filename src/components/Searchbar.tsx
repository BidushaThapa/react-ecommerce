import { InputText } from './Molecules/TextComponent'
import { useProduct } from '../store/productStore';

export const Searchbar = () => {
      const filters=useProduct((state)=>state.filters);
        const setFilters=useProduct((state)=>state.setFilters);
  return (
    
        <InputText
          value={filters.title || filters.description ||""} 
        className= " my-2 p-2 rounded-2xl"
        onChange={(event) =>{ 
        setFilters("title", event.target.value);
        setFilters("description", event.target.value);
        }}
/>
        
  
  )
}
