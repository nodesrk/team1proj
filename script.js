// form validation
function Validate(e) {
  // // Get the value of the input field with id="numb"
  // let x = document.getElementById("Firstname").value;
  // // If x is Not a Number or less than one or greater than 10
  // let text;
  // if (x=="") {

  //     alert("Please enter the below detail.");

  // } else {
  //     alert("Thank you ");

  // }
  let x = document.forms["loginform"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
    // alert("Name must be filled out");
  } else {
    alert("done");
  }
}

function cart() {
  var cartnumber = document.getElementById("cartspan").innerText;
  cartnumber = Number(cartnumber);
  document.getElementById("cartspan").innerText = cartnumber + 1;
  alert("added to cart");
}

var bannerTexts = ["Cool camera Beautiful Memories.", "asdasd"];
var h2banner = document.getElementById("bannertext").innerText;
var index = 0;
setInterval(slider, 10);
function slider() {
  if (index < bannerTexts.length) {
    index = index + 1;
  } else {
    index = 1;
  }
  h2banner.innerText = +bannerTexts[index - 1];
}

// form validation for feedback
function Validatefeedback() {
  // // Get the value of the input field with id="numb"
  let x = document.forms["feedbackform"]["NameF"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
    // alert("Name must be filled out");
  } else {
    alert("done");
  }
}
