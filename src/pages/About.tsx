//About
import {  Outlet } from 'react-router-dom'

 const About = () => {
  return (
  
      <div className=''>
        
        <div className=" flex  justify-center items-center font-medium h-screen  text-2xl text-amber-300 overflow-hidden">
            <p>This is an About page !! </p>
            <Outlet/>
        </div>
     
      </div>
    )

}
export default About
