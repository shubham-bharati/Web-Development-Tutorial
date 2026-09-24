console.log("Hey this is a Tutorial 55")
// var a = 10; var is ok but alwaye use let variable 
let a =10;  // it is global variable
// a = a + 1;  var me ye allow hai
//  var 55a = " Rohan " Not Allow
// var = $a or _a = 20; Allow
// var b = 20;
let b = 20;
// var c = "Hey";
// console.log(a + b)
// console.log(typeof a , typeof b , typeof c) //variable ko pahchanane ke liye 
// const a1 = 6;
// a1 = a1 + 5;  ye constant me allow nahi hai 
{
    let a = 55; // block code ke ander rahega to ander ka let a ho access karega 
console.log(a)
}
console.log(a) // block ke bahar rahega to global a = 10 ko access karega 

let x = "Hay Boys";
let y = 22;
let z  = 3.5;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

//Primitive Data type = primtive data type of are a set of a basic data type in javascript.
//Objext is a non primtive datatye in javascript.
// There are 7 primitive datatype in jave script = Null , Number , String , Symbol , Undefined , Boolean , Biglnt.
//null ka typeof null nahi object hota hai 

 let o= {
    "name" : "Harry",
    "Job role": 5600,
    "is_handsome":true
 }
 console.log(o);
 o.sallry = "500crores";
 console.log(o);
 o.sallry = "1000crores";
 console.log(o);