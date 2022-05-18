var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");
//keeps the hours on the page even when you refresh the browser

counter.textContent = count;

addButton.addEventListener("click", function() {
  if (count < 24) {
    count++;
    counter.textContent = count;
    localStorage.setItem("count", count); // the only thing you can store in local storage is strings
  //local storage is only permanent on your browser
  }
});

subtractButton.addEventListener("click", function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});
