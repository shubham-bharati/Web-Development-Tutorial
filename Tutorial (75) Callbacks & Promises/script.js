console.log("Sam is a hacker")
console.log("tam is a hecker")
setTimeout(() => {
    console.log("I am inside settimeout")
},2000);   // 2 Second baad print hoga last me

setTimeout(() => {
    console.log("I am inside settimeout")
},0);

console.log("The End")
const fn = () =>{
    console.log("Nothing")
}

const callback = (arg, fn) => { //callback function is a function which is passed as an argument to another function and it will be called after the execution of that function
    console.log(arg)
    fn()
}

const  loadScript = (src , callback) => { // src is the url of the script and callback is the function which will be called after the script is loaded
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => callback("Harry", fn);
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback  )
