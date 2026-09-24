let arr = [1,2,3,4,5];
// console.log(arr,typeof arr)
// console.log(arr.length)
// console.log(arr[2])
//array is a muteable variable (value change kr sakte hai) , but string is a not muteable variable ( value change nahi kr sakte hai )
arr[0] = 507 ;
// console.log(arr[0])
console.log(arr.toString())
console.log(arr.join(" and "))
let a = [1,2,3,4,5,6]
console.log(a)
console.log(a.pop()) // last element ko bahar nikalane ke liye 
console.log(a)
console.log(a.push(100)) // last element me add karne ke liye 
console.log(a)
console.log(a.push("Shubham")) // last element me add karne ke liye 
console.log(a)


console.log(a.shift()) // first element ko bahar nikalane ke liye 
console.log(a)
console.log(a.unshift(100)) // first element me add karne ke liye 
console.log(a)
console.log(a.unshift("Shubham")) // first element me add karne ke liye 
console.log(a)

let b = [1,2,3,4,5,6];
console.log(b.splice(1 ,2)) // anyone   element ko remove karne ke liye 
console.log(b)
console.log(b.splice(1 ,2 , 55 , 88)) // remove element me add/replace karne ke liye 
console.log(b)
