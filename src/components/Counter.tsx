import React, { useState,useEffect } from 'react'

function Counter() {

  const [count, setCount] = useState(0);
  useEffect(()=>{
    //THe codes that we want to run
console.log("the count is:",count)
// optional return function
return  ()=>{
  console.log("I am being cleaned this up!")
}
// the use effect will run these above codes before the counter changes 

  },[count]); //the dependency array
  return (
    <div>
      <p>Count:{count}</p>
      <div>
        <button
        onClick={()=>setCount(count+1)}
         className='bg-red-200 rounded-xl p-2 mr-3 cursor-pointer'>Increment</button>
        <button
        onClick={()=>setCount(count-1)}
         className='bg-red-200 rounded-xl p-2 cursor-pointer'>Decrement</button>
      </div>

    </div>
  )
}

export default Counter
