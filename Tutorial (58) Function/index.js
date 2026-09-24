function nice(name) {
    console.log("Hey " + name + " you are a nice hairstyle")
    console.log("Hey " + name + " you are a nice T-shirt")
    console.log("Hey " + name + " you are a nice bag")
    console.log("Hey " + name + " you are a nice shoose")
}
nice("Harry")
nice("Shubham")
// console.log("Hey Harry you are a nice hairstyle")
// console.log("Hey Harry you are a nice T-shirt")
// console.log("Hey Harry you are a nice bag")
// console.log("Hey Harry you are a nice shoose")

// function sum(a,b){
//     console.log(a + b)
// }
// sum(3,7)

function sum(a,b,c){
    return a + b + c
}
result1 = sum(3,7)
result2 = sum(5,8)
result3 = sum(25,9,10)
console.log("The sum of these number is :", result1)
console.log("The sum of these number is :", result2)
console.log("The sum of these number is :", result3)

const func1 = (x)=> {
    console.log("I am an arrow function",x)
}
func1(34);
func1(5);
func1(20);