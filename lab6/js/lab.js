//js borrowed from Kevin to help me figure out how it works.


//Variables
myTransport = ["Toyota Corolla S:", "Bike", "Walking", "Scooter"];

myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "Gray",
  year: "2006",
  age: function() {
    return 2020 - age;
  }
}

//Output
document.writeln("Transportation types: ", myTransport, "</br");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
