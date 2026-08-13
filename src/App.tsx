// typescript is we dont know what js is doing so let us explain
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import Counter from "./components/Counter"
function App() {
  // this is how the usestates are created
  const [todo,setTodo]=useState<string>("");
  // the way we create the array of the interface
  const [todos,setTodos]=useState<Todo[]>([]);

  // this is used to prevent the default loading on the function of handleAdd
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    // if there is something like when a user typed inside keep it for now what we have then we have to clear after adding something new in there
    if(todo){
      setTodos([...todos,
        //new id created then also then that one action created from todo then are we done yet then no
        {id:Date.now(),todo,isDone:false}])
        // clear everything that was there 
        setTodo("");
    };
      console.log(todos);
  };


  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[450px]">
        <Header />
        <Counter/>
        {/* <TaskList /> */}
        <TaskList 
         todo={todo} 
         setTodo={setTodo} 
         handleAdd={handleAdd}/>
      </div>
    </div>
  );
}
export default App;