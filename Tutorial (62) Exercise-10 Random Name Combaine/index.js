/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives :
Crazy 
Amazing
Fire 

Shop Name :
Engine 
Food 
Germants

Another Word :
Bros
Limited
Hub 
*/   
//Without Array use 
 
let rand1 = Math.floor(Math.random() * 3);
let rand2 = Math.floor(Math.random() * 3);
let rand3 = Math.floor(Math.random() * 3);
let first, second, third;

//Adjective
if (rand1==0){
    first = "Crazy";
}
else if (rand1==1){
    first = "Amazing";
}
else {
    first = "Fire";
}

//Shop Name
if (rand2==0){
    second = "Engine";
}
else if (rand2==1){
    second = "Food";
}
else {
    second = "Garments";
}

//Another Word
if (rand3==0){
    third = "Bros";
}
else if (rand3==1){
    third= "Limited";
}
else {
    third = "Hub";
}

console.log(first + "" + second + ""+ third);


//Array use BusinessName
 let a = ["Crazy","Amazing","Fire"];
let b = ["Engine","Food","Germants"];
let c =["Bros","Limited","Hub"];

let random1 =
Math.floor(Math.random() * a.length);
let random2 =
Math.floor(Math.random() * b.length);
let random3 =
Math.floor(Math.random() * c.length);

let businessName = a[random1] + "" + b[random2] + "" + c[random3];
console.log(" BusinessName :",businessName);