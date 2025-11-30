import React from 'react'
import { Heading, Label } from './Molecules/TextComponent'
import { useProduct } from '../store/productStore'
import { FaStar } from 'react-icons/fa'

const ratings = [
 5,4,3,2,1
]

export const Rating = () => {
  const filters = useProduct(state => state.filters)
  const setFilters = useProduct(state => state.setFilters) 

  return (
    <div className='flex flex-col gap-2'>
      <Heading>Rating</Heading>
      {ratings.map((stars) => (
        <Label key={stars} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={filters.rating === stars}
            onChange={() => setFilters("rating",stars)}
          />
         { Array.from({length:stars}).map((_,index)=>(
          <span className="text-yellow-500"><FaStar key={index}/></span>))}
        </Label>
      ))}
    </div>
  )
}
