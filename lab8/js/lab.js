//Lab 8 JSS

//Function Definitions
function firsthing() {
  console.log("Test 1, firsthing");
  document.writeln("Test 1, firsthing");
}
function secondthing() {
  console.log("Test 1, secondthing");
  document.writeln("Test 1, secondthing");
}
function thirdthing() {

document.writeln("Test 1, thirdthing");
}

//Test 1 - call/list
firsthing();
secondthing();
thirdthing();

//  console.log(""); //linebreak
// document.writeln(""); //linebreak

//Test 2 - timeout
setTimeout(function() {
   console.log("Test 2, firsthing");
   document.writeln("Test 2, firsthing");
 }, 1000);

 setTimeout(function() {
   console.log("Test 2, secondthing");
   document.writeln("Test 2, secondthing");
 }, 3000);

 setTimeout(function() {
   console.log("Test 2, thirdthing");
   document.writeln("Test 2, thirdthing");
 }, 5000);

 // setTimeout(function() {
 //   console.log("");
 //   document.writeln("");
 // }, 5000); //linebreak


 //Test 3 - change order via timer
 setTimeout(function() {
   console.log("Test 3, firsthing");
    document.writeln("Test 3, firsthing");
 }, 11000);

 setTimeout(function() {
   console.log("Test 3, secondthing");
   document.writeln("Test 3, secondthing");
 }, 7000);

 setTimeout(function() {
   console.log("Test 3, thirdthing");
   document.writeln("Test 3, thirdthing");
 }, 9000);


//Sources
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions




















































//NOTES

//
// //enter username
// var username = prompt("What's your username?");
// console.log("Your username is:"), console.log(username);
//
// //define copy array & split/sort
// var usernameSplit = username.split("");
// usernameSplit.split;
// usernameSplit.sort();
//
// //linebreak
// console.log();
//
// //print sorted username
// console.log("Your sorted username is:");
// console.log(usernameSplit);
//
// document.writeln("Your sorted username is:");
// document.writeln(usernameSplit);
//

// //username
//  var username = prompt("What's your username?");
//
// //timer
// setTimeout(function() {
//   console.log("Timer started.");
// }, 0);
//
// setTimeout(function() {
//   console.log("1...");
// }, 1000);
//
// setTimeout(function() {
//   console.log("2...");
// }, 2000);
//
// setTimeout(function() {
//   console.log("3...");
// }, 3000);
//
// setTimeout(function() {
//   console.log("4...");
// }, 4000);
//
// setTimeout(function() {
//   console.log("....5!");
// }, 5000);
//
//  setTimeout(function() {
//    console.log("Timer completed by an anonymous function!");
//  }, 5000), setTimeout(function() {
//   console.log("Thank you,", username, ".");
// }, 5001);
