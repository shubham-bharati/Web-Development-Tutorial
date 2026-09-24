let arr = [ 3 ,5,17,8,19,4,5];
/* ye long method hai 
let newArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)  // element ka square print kanane ke liye 
}
console.log(newArr)
*/

/*
// ye short method hai 
let newArr = arr.map((e ,index,array)=>{ //(e = element) 
    return e**2
})
console.log(newArr)

const greaterthanseven = (e)=>{
    if (e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterthanseven))

let arr2 = [ 1,2,3,4,5,6]
const red = (a,b)=>{
  //return a*b  // 1*2 =?*3=?*4=?*5=?*6
  return a+b  // add karega totle no ko 
}
console.log(arr2.reduce(red))  
*/

// Array.from ("Shubham")  kisi bhi string ko array banane ke liye 