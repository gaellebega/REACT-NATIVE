// Variables in js
//js is like i know what am doing right now
let name="Gaelle";
let age=10;
let isStudent=true;
let loggedIn=false;
let country="Rwanda"
let array=["apple","banana","orange"];

// the normal way we use objects in js
let user={
  name:'uwimana',
  location:"Kigali",
  age:30
}

//The normal way we use 
function tellName(name){
  return "my name is" +name;
}
tellName("Gaelle")

function makeAddition(a,b){
return a+b;
}
makeAddition(3,4);


// when we are creating the arrow functions this is how it is done
// we create them using the let,const,var
const greet=(name)=>{
  return `hello${name}`;
};
// null
greet();
let value=null;
// undefined
let data=undefined;

// NY usage in js
let myvalue=10;
myvalue="Hello";
myvalue="true";