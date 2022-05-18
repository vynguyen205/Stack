var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    
    var state= element.getAttribute("data-state");

    if (state === "hidden") {

      // element.dataset.state = "number"; //This code is wrong
      element.textContent = element.dataset.number;
      // element.setAttribute("data-state" , "number"); //This code is wrong
      element.dataset.state = "visible"; /* This word visible can be anything. Gobbley gook
      The computer knows that if it's not hidden then it has be be visible. We are just naming it visible so we know what it does.*/



    }else {
      
      element.textContent = "";
      element.state("data-state", "hidden")
    }
  }
});
