//Lab 12: Loops

console.log("There is no multiple of 3, 5, and 7 until 105!");
for (var i=1; i<201; i++) {
  console.log(i);
   if ((i%5==0)&&(i%3==0)&&(i%7==0)) {
    console.log("fizz buzz boom");
    document.getElementById('output').innerHTML += "fizz buzz boom" + "<br>";
  } else if((i%5==0)&&(i%3==0)) {
    console.log("fizz buzz");
    document.getElementById('output').innerHTML += "fizz buzz" + "<br>";
  } else if(i%7==0) {
    console.log("boom");
    document.getElementById('output').innerHTML += "boom" + "<br>";
  } else if(i%3==0) {
    console.log("fizz");
    document.getElementById('output').innerHTML += "fizz" + "<br>";
  } else if(i%5==0) {
    console.log("buzz");
    document.getElementById('output').innerHTML += "buzz" + "<br>";
  } else if((i%5!==0)&&(i%3!==0)&&(i%7!==0)) {
    console.log("not a multiple of 3, 5, or 7");
    document.getElementById('output').innerHTML += "not a multiple of 3, 5, or 7" + "<br>";
  }
 }

//innerHTML lines pulled from w3schools
//output is making more sense now, i get the element id of my html element, then assert it's innerhtml via js cmd
