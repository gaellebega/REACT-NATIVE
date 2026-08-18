// import React from 'react'
import { Dispatch, SetStateAction,useRef } from 'react'
//create the interface props
interface Props{
  todo:string;
  setTodo:Dispatch<SetStateAction<string>>;
  // add the function here over the props
  // our function will not return anything so we got tomake it like this
  handleAdd:(e:React.FormEvent)=>void;


}
// todo have to be the string then setTodo have to be the function
const TaskList = ({todo,setTodo,handleAdd}:Props) => {
  // we use the html element becuse input is an element but when we have the div we could say html Div element
  const inputRef=useRef<HTMLInputElement>(null);
  
  return (
    // when we click go then this function have to fireOFF
    <form className="w-[70%]" onSubmit={
      // this when we click inside the input field so that thebackground ecomes blur
      (e)=>{
      handleAdd(e);
      inputRef.current?.blur();
      }}>
      <div className='relative'>
      <input
       type="text" 
       ref={inputRef}
      // this is used to update the state which is function of the SetTodo
      value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }
      placeholder="Enter a task" 
      className=" p-3 pr-20 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-300 "/>
      <button type="submit" className=' absolute  px-5 py-3 right-0 top-1/2 -translate-y-1/2 bg-amber-600  rounded-full transition duration-300 hover:shadow-md  text-lg text-white font-bold cursor-pointer scale-[0.8] '>Go</button>
      </div>
    </form>
  )
}

export default TaskList
