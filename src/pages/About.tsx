//About
import {  Outlet } from 'react-router-dom'

export const About = () => {
  return (
  
      <div>
        
        <div className=" flex  justify-center items-center font-medium h-screen text-2xl text-amber-300 overflow-hidden">
            <p>This is an About page !! </p>
            <Outlet/>
        </div>
     
      </div>
    )

}
