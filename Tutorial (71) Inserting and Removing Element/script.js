/* 
document.querySelector(".box")     // 
<div class=​"box">​Hey I am a box​</div>
​
document.querySelector(".box").innerHTML // .box ke ander jo jo element ya text rahega sab aa jayege.
'Hey I am a box'

document.querySelector(".container").innerHTML   //.container ke ander jo jo e lement ya text rahega sab aa jayega.
<div class="box">Hey I am a box</div>\n 

document.querySelector(".box").innerText // .box ke ander jo jo  text rahega sab aa jayege.
'Hey I am a box' 

document.querySelector(".container").innerText // .container ke ander jo jo  text rahega sab aa jayege.
'Hey I am a box' 

document.querySelector(".container").outerHTML //sabhi element kitne hai kaun kaun sa hai sab .
<div class="container">
<div class="box">Hey I am a box</div>
</div>

document.querySelector(".container").TagName
'DIV' 

document.querySelector(".box").innerHTML = "Hey I am Shubham"  // .box ke ander jo text rahega wo badal jayega.
'Hey I am a Shubham'

document.querySelector(".box").hasAttribute("style") // style attribute hone se pahle ye flase hoga 
false

document.querySelector(".box").removeAttribute("style")  // style attribute remove ho jayega. 
true

document.querySelector(".box").Attribute("style") // style attribute hone se pahle ye flase hoga 

document.designMode = " on" // koi bhi website me changes kr sakta hai.
' on'

document.querySelector(".box").dataset 
DOMStringMap {createdby: 'Shubham'}

document.querySelector(".box").remove
I am under the water. Please help me here too much raining...iuuuuoooo
Hey I am a box
remove

document.querySelector(".container").classlist
all class preview alag alag dega 
jaise- "container red bg-green" to ise preview hoga ye 
container
red
bg-green
document.querySelector(".container").className
all class preview eksath dega 
jaise- "container red bg-green" to iseka preview hoga ye
"container red bg-green"

class adding
document.querySelector(".container").classlist.add("Harry")
"container red bg-green Harry"

class remove
document.querySelector(".container").classlist.remove("Harry")
"container red bg-green"

document.querySelector(".container").classlist.remove("red") // but ek class ek bar add hogi chahe kitni bar repeat add karo.
"container bg-green"

toggle = agar class lagi hogi to hat jayegi aur hati hai to lag jayegi 
example-
document.querySelector(".container").classlist.toggle("red")
false //matlb jaha jaha red color text hoga sab black ho jayga wapas
*/