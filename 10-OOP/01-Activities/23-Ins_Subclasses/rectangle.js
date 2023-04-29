const Shape = require('./shape');

class Rectangle extends Shape {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangle = new Rectangle(12, 9);
rectangle.printInfo();


class Person{
  constructor(name, age, height, weight){
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getHurt(){
    console.log("OUCH!!")
  }

  getOlder(){
    this.age++;
  }
}


class Child extends Person{
  constructor(name, age, height, weight, favoriteToy){
    super(name, age, height, weight);
    this.favoriteToy = favoriteToy;
  }

  getHurt(){
    console.log("WAAAA!")
  }
}

const Holden = new Child("Holden", 3, "3'10", "35", "Legos");
Holden.getOlder()
console.log(Holden)
Holden.getHurt()