// typescript is we dont know what js is doing so let us explain
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
function App() {
  // this is how the usestates are created
  const [todo,setTodo]=useState<string>("");
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[450px]">
        <Header />
        {/* <TaskList /> */}
        <TaskList todo={todo}  setTodo={setTodo}/>
      </div>
    </div>
  );
}
export default App;