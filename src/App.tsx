// typescript is we dont know what js is doing so let us explain

import Header from "./components/Header";
import TaskList from "./components/TaskList";
// the way we define the dat type of a variable in typescript
//this is the normal way in jslet name="Piyush";
let name: string ="Piyush";
let names:string;
let age:number=5;
let isStudent:boolean=true;
let fruits:string[]=["apple","orange","banana","avocado"];
let numbers:number[]=[1,2,3,4,5];

// way we use objects in typescript
let user:{
  name:string;
  age:number;
}={
  name:"Gaelle",
  age:10
}
names="Mukeshimana";

// null
let value:null=null;
// undefined
let data:undefined=undefined;
// making the functions in typesctipt
function makeName(name:string):string{
  return "Hello" + name;
}
console.log(makeName("gaelle"))

const Makemultiply=(a:number,b:number):number=>{
  return a*b;
};
console.log(Makemultiply(2,4))
// makeMultiply(2,4)

let myvalue:any=10;
myvalue="hello";
myvalue="age";
myvalue=true;
myvalue={name:"Gaelle"};


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