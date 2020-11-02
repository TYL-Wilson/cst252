//lab 16: libraries / JQuery

// $(".elementid").command   <-- replaces getElementById /w JQuery

// $(".output").html("This is some text.");

// sideElement = $("#sideoutput");

// $("#output").append("<button>Click Me");


$("#output").append("<button id='button'>button");

$("#button").click(function() {
  prompt("Make button green?");
  $("button").css({"background-color": "green"});
})
