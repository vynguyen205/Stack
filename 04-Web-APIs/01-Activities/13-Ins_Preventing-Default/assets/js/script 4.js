var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) { //the word (event) can be called anything, it doesn't have to be that
  // Prevent default action //this is preventing the form from leaving the page and keeping page from refreshing
  event.preventDefault();
  //The word "event" can be called anything. Doesn't have to be event. gobbley gook
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse); //after you write "click", just write the event
//no need to put parenthesis call the function in the addeventlistener

