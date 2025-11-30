import  { useEffect, useState, useCallback } from 'react'
import TestComponent from '../components/TestComponent'

const TestPage = () => {
  const [count, setCount] = useState(0)
//  const [total,setTotal]=useState(0)
  
 const IncreaseCount = useCallback(() => {
    setCount(count=>count+1)  
  }, [])

  useEffect(() => {
    console.log("renders", count)
  }, [IncreaseCount, count])

  return (
    <div>
      <p>Count: {count}</p>
      <button className='bg-white text-black rounded-lg  p-2 cursor-pointer'  onClick={IncreaseCount}>Increase</button>
    </div>
  )
}

export default TestPage
