


var colorWell;
var defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.addEventListener("change", updateAll, false);
    colorWell.select();
  }
function updateFirst(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
  }

  function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
  }




// }
 //window.addEventListener("load", startcolorSelect, false);

 function changeColor(event) {
    var colorPicker = document.getElementById("colorPick")
     var colorMe = document.getElementById("colorMe");


    if (colorPicker.value == "red") {
        colorMe.style.color = "red";
    } else if (colorPicker.value == "green") {
        colorMe.style.color = "green";
    } else if (colorPicker.value == "blue") {
        colorMe.style.color = "blue";
    } else if (colorPicker.value == "Pink") {
        colorMe.style.color = "Pink";
    } else {
      alert("There was an error!");
    }};
console.log("end of code.")