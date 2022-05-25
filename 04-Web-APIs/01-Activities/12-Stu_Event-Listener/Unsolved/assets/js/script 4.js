var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");

var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  count++; //++ means to count one at a time like 1,2,3...so on
  setCounterText();
});

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {

  // it will count greater than 0 only. It stops you from going negative
  if (count > 0) {
    count--;
    setCounterText();
  }
});