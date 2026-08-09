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
//to make the objects look more professional we have to make using the use of type keyword with the following name with capital letter

type Person={
  age:number;
  name:string;
}

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

// union is also used to mean and 
let id:number|string=101;

// LITERAL TYPES 


let personName:unknown;