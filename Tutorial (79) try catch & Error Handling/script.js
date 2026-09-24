let a = prompt("Enter a number: ")

let b = prompt("Enter second number: ")
//User ke karan milne wala error throw kr dega 
if(isNaN(a) || isNaN(b)){    // more error avilable to MDN website . {Reference = Error in js.MDN} 
    throw SyntaxError("Sorry this is not allowed")  // User ko batane ke liye Error alert karna hoga. {SyntaxError = Error in js.MDN}
}

let sum = parseInt(a) + parseInt(b)  // {sting + sting = string } use to parseInt to convert string to number Integer {Int + Int = Integer }
// console.log("The sum is:",sum)

function main(){
    let x = 1;
    //error try karne and Handle karne liye try and catch use honge.
    try {
        console.log("The sum is:",sum*x)
        return true

    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    finally{  // function ke ander return hone ke baad bhi finally block execute hoga. 
        console.log("files are being db connection is being closed")
    }
}
let c = main()