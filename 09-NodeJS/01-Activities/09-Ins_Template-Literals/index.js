const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

//the back ticks help to concat everything tgt
//it's called literal template
const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.