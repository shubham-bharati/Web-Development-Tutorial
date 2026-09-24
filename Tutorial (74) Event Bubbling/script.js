// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events (List of all mouse event here)


let button = document.getElementById("btn")
// button.addEventListener("click",()=>{      //buttom pr single click karte hi next text show ho jata hai 
 button.addEventListener("dblclick",()=>{   //buttom pr double click karte hi next text show ho jata hai 
///   button.addEventListener("mouseleave",()=>{   // mouse pointer buttom pr le jakar hatane pr next text show ho jata hai 
// alert("I was clicked. yayy!")
 document.querySelector(".box").innerHTML = "<b> Yayy you were clicked </b> Enjoy your Click!"
})

button.addEventListener("contextmenu", () => {   // buttom pr right mouse click karte hi next text show ho jata hai 
    alert("Don't hack us by Right Click Please!")
})

document.addEventListener("keydown", (e) => {   // buttom pr right mouse click karte hi next text show ho jata hai 
    console.log(e.key,e.keyCode)
})
