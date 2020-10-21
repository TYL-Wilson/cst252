//Lab 15: Object-Oriented Design
//
// function Vehicle(name, brand, year, color) {
//   this.vehicleName = name;
//   this.vehicleBrand = brand;
//   this.vehicleYear = year;
//   this.vehicleColor = color;
//   this.details = function() {
//     return "Car details: " + "<br>" +
//     this.vehicleName + " " + this.vehicleBrand + " " + this.vehicleYear + " " + this.vehicleColor
//     + ".";
//   }
// }
//
// var firstcar = new Vehicle("Corolla", "Toyota", "2006-S", "gray");
// var secondcar = new Vehicle("Camry", "Toyota", "2015", "white");
//
//
// var vehicleArray = [firstcar, secondcar];
//
//
// document.getElementById("output").innerHTML += "<p>" + firstcar.details() + "</p>"; //getElementById base taken from Wes Modes' lab instructions
// document.getElementById("output-2").innerHTML += "<p>" + secondcar.details() + "</p>";


class Car {
  constructor(name, brand, year, color) {
    this.carname = name;
    this.carbrand = brand;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "I have a " + this.carname + " " + this.carbrand + " " + this.caryear + " " + this.carcolor + ".";
  }
}

mycar = new Car("Toyota", "Corolla", "2006", "gray");
momcar = new Car("Toyota", "Camry", "2015", "white");

 document.getElementById("output").innerHTML += "<p>" + mycar.info() + "</p>";
 document.getElementById("output-2").innerHTML += "<p>" + momcar.info() + "</p>";
