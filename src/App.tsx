// typescript is we dont know what js is doing so let us explain
import Header from "./components/Header";
import TaskList from "./components/TaskList";
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