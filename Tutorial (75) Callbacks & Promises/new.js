console.log("Sam is a hacker")
console.log("tam is a hecker")
setTimeout(() => { // setTimeout javaScript ka Built-in functionn hai jo kisi code ko kuchh der baad chalata hai 
    console.log("I am inside settimeout")
},3000); 

setTimeout(() => {  // "() =>" = ye function likhane ka short method hai [old method function(){  }] 
    console.log("I am inside settimeout 2")
},2000);// 2 Second baad print hoga last me (1000 millisecond = 1 second)

console.log("The End")

const fn = () =>{   // jb koi parameter nahi hai to "() => {}" likha jata hai jisme [=> arrow operator] hai 
    console.log("Nothing")
}

const callback =(arg,fn) => {  // (arg,fn) = parentheses() ke ander parameters "name" likha jaate hain.
    console.log(arg)
    fn()
}

const  loadScript = (src , callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Harry");
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg,fn) =>{
    console.log(arg)
    fn("firstarg", ()=>{
        ddg("secondarg", () =>{

        })
    })
})
 