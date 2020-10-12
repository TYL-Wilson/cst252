//Lab 11 JS: Conditionals

//sorting hat function
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
//conditional - use return instead of document.writeln
  if(mod==0) {
    return "Gryffindor"
  } else if(mod==1) {
    return "Ravenclaw"
  } else if(mod==2) {
    return "Slytherin"
  } else if(mod==3) {
    return "Hufflepuff"
  }
}


//define button, pull id from button
var button = document.getElementById("button");

//event listener, (event,function)
button.addEventListener("click", function() {
  var name = document.getElementById("input").value; //define name by input value
  var house = sortingHat(name); //define house by putting name through sorting hat function
  newText = "<p>The Sorting Hat has sorted you into " + house + "." + "</p>"; // add text to output in html
  document.getElementById("output").innerHTML = newText; //output new html
})

//Was able to make a decent sortingHat / conditonal build, but needed to consult
//Wes' code for the event listener and below.

//also utilized W3Schools
