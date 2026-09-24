console.log('This is promish')
//  let promish1 = new Promise((resolve, reject) => {  // promise is a constructor function which takes a callback function as an argument. This callback function has two parameters resolve and reject. resolve is called when the promise is fulfilled and reject is called when the promise is rejected.
//  setTimeout(() => {
//     console.log('Yes i am done');
//      resolve('Promish1 is the resolved');
//  },3000)
//  })

//  promish1.then((value) => {
//     console.log(value)
//  });

 let prom1 = new Promise((resolve, reject) => {  // promise is a constructor function which takes a callback function as an argument. This callback function has two parameters resolve and reject. resolve is called when the promise is fulfilled and reject is called when the promise is rejected.
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  }
  else {
    setTimeout(() => {
    console.log("Yes i am done")
     resolve("Harry is the resolved");
 },3000);
}
 })

  let prom2 = new Promise((resolve, reject) => {  // promise is a constructor function which takes a callback function as an argument. This callback function has two parameters resolve and reject. resolve is called when the promise is fulfilled and reject is called when the promise is rejected.
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  }
  else {
    setTimeout(() => {
    console.log("Yes i am done 2")
     resolve("Harry is the resolved 2");
 },1000);
}
 })

//  promise1.then((value) => {  // then() method is used to handle the resolved value of the promise. It takes a callback function as an argument which is called when the promise is fulfilled. The resolved value is passed as an argument to this callback function.
//     console.log(value);      // The value is the resolved value of the promise which is passed as an argument to the callback function.
//  }).catch((error) => {       // catch() method is used to handle the rejected value of the promise. It takes a callback function as an argument which is called when the promise is rejected. The rejected value is passed as an argument to this callback function.
//     console.error(error);    // The error is the rejected value of the promise which is passed as an argument to the callback function.
//  });

// let p3 = Promise.all([prom1, prom2])  // all() method is used to handle multiple promises. It takes an array of promises as an argument and returns a new promise which is fulfilled when all the promises in the array are fulfilled. The resolved values of all the promises are passed as an array to the callback function.
// let p3 = Promise.allSettled([prom1, prom2]) // allSettled() method is used to handle multiple promises. It takes an array of promises as an argument and returns a new promise which is fulfilled when all the promises in the array are either fulfilled or rejected. The settled values of all the promises are passed as an array to the callback function.
let p3 = Promise.race([prom1, prom2])   // race() method is used to handle multiple
console.log(value);      // The value is the resolved values of all the promises which are passed as an array to the callback function.
p3.then((a) => { 
    console.log(a)    // The value is the resolved values of all the promises which are passed as an array to the callback function.
 }).catch(err=> {       // catch() method is used to handle the rejected value of the promise. It takes a callback function as an argument which is called when the promise is rejected. The rejected value is passed as an argument to this callback function.
    console.error(err)    // The error is the rejected value of the promise which is passed as an argument to the callback function.
 })

