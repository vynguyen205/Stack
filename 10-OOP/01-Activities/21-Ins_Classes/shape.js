class Shape {
  // Just like constructor functions, classes can accept arguments
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  printInfo() {
    
    console.log(`Area: ${this.area}`);
    console.log(`Perimeter: ${this.perimeter}`);
  }
}

const square = new Shape(25, 25);
const rectangle = new Shape(50, 100);

square.printInfo();
rectangle.printInfo();

const date = new Date();
console.log(date.toDateString())

let array = new Array() && new Number() && new String()
