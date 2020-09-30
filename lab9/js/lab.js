//Lab 9 JS

//output variable
var outputEl = document.getElementById("output");


//create new1El & set inner html
var new1El = document.createElement("p");
new1El.innerHTML = "Lab 9 - JS Section";


// create new2El & set inner html
var new2El = document.createElement("q");
new2El.innerHTML = "Thank you to Kevin for helping me with this code. So this is how you overtake CSS with JS";

//append both new elements with appendChild() - Used Kevin's help to add document.body before appendchild.
document.body.appendChild(new1El)
document.body.appendChild(new2El)

//change css of 2 elements

//THIS STRATEGY DID NOT WORK!
// document.getElementById("p").style.fontSize = "large";
// //lab.js:19 Uncaught TypeError: Cannot read property 'style' of null
//     //at lab.js:19
// document.getElementById("q").style.fontSize = "medium";

//css-like js styling
new1El.style.color = "white";
new1El.style.border = "solid";
new1El.style.backgroundColor = "slategray";
new1El.style.width = "250px";
new1El.style.padding = "15px";


new2El,new1El.style.fontSize = "large";
new2El.style.border = "solid";
new2El.style.padding = "15px";

//Sources
//W3Schools: https://www.w3schools.com/jsref/prop_style_fontsize.asp
//Kevin Martelli's code - lab partner.
