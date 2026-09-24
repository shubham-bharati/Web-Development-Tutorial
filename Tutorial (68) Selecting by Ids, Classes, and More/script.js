console.log("Shubham")

/*
 let boxes  = document.getElementsByClassName("box")
 console.log(boxes)

 boxes[2].style.backgroundColor ="red"
 */

/*  document.getElementById("Box3").style.backgroundColor = "red" // id wale me element hota baki sabme elemets kyuki ye id ek hi rahegi  */

/*  document.querySelector(".box").style.backgroundColor = "green" // only pahle box ke liye use hota hai */

/*
console.log(document.querySelectorAll(".box")) // sabhi element ko ek sath use kr sakte hai changing ke liye 
document.querySelectorAll(".box").forEach(e=> {
 e.style.backgroundColor = "green"
});
*/

/*
document.getElementsByTagName("div")
[div.container, div.box, div.box, div.box, div.box, div#Box3.box, div.box, div.box, div.glasp-extension-toaster, div.glasp-extension, div.glasp-extension, Box3: div#Box3.box]

e[4].matches("#Box3")
True

e[5].matches("#Box3")
False

e[3].closest("#Box3")
null
e[3].closest(".container")
<div class = "container">...</div>

e[3].closest("html")
<html lang ="en">
<head>...</head>
<body>...</body>
</html>

document.querySelector(".container").containes(e[2])
True 

document.querySelector(".container").containes(document.querySelector("body"))
false // kyuki body container ke ander nahi hai 

document.querySelector("body").containes(document.querySelector(".container"))
True // kyuki container  body ke ander  hai 

*/