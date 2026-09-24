console.log('Async/Await & Fetch API in JavaScript with Examples')

// 

async function getData() {  // async फंक्शन का उपयोग return करने के लिए
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')  // Fetch API का उपयोग करके डेटा लाना
    let data = await x.json()
    console.log(data)  // JSON डेटा को प्रिंट करना
    return 455
}
// // used to post request to the server
// async function postData() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//     });
//     let data = await x.json();
//     console.log(data);
// }

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data from API")
    let data = await getData()
    // data.then((v) => {
    //     console.log(data)  // This will log the resolved value of the promise.
    //     console.log("Process Data ")
    //     console.log("task 2")
    // })

    console.log(data)  // This will log the resolved value of the promise.
    console.log("Process Data ")
    console.log("task 2")
}
main()

// settle means resolve or rejet.
// resovle means has settled successfully 
// rejext means promise has not settle successfully.