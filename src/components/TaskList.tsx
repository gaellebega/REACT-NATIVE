import React from 'react'

const TaskList = () => {
  return (
    <form className="w-[70%]">
      <div className='relative'>
      <input type="text" 
      placeholder="Enter a task" 
      className=" p-3 pr-20 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-300 "/>
      <button type="submit" className=' absolute  px-5 py-3 right-0 top-1/2 -translate-y-1/2 bg-amber-600  rounded-full transition duration-300 hover:shadow-md  text-lg text-white font-bold cursor-pointer scale-[0.8] '>Go</button>
      </div>

    </form>
  )
}

export default TaskList
