import Header from "./components/Header";
import TaskList from "./components/TaskList";
// the way we define the dat type of a variable in typescript
//this is the normal way in jslet name="Piyush";
let name: string ="Piyush"
function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[450px]">
        <Header />
        <TaskList />
      </div>
    </div>
  );
}

export default App;