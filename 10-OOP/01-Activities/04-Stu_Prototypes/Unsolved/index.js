// TODO: Add a comment describing what kind of function this is
<<<<<<< HEAD
//this is a CONSTRUCTOR FUNCTION
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
<<<<<<< HEAD
//PROTOTYPE IS THE BONE OF THE CONSTRUCTOR FUNCTION, YOU GET ALL OF THE STUFF THAT IS SET IN THAT FUNCTION 
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method
<<<<<<< HEAD
//GRABBING THE SET VARIABLES IN THE CONSTRUCTOR FUNCTION, AND THEN ATTACHING AN IF STATEMENT LOG WHO IS ALIVE AND WHO ISN'T
//SO IF CHARACTER HITPOINT IS NOT 0 THEN THEY ARE STILL ALIVE, VICE VERSA
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
<<<<<<< HEAD
//THIS IS A FUNCTION SAY THAT CHARACTER 2'S SET HITPOINT SUBTRACT AND EQUAL THE STRENGHT?
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
<<<<<<< HEAD
//LEVELING UP THE CHARACTER THAT WILL BE SET WHEN CALLED ON LATER. AND ADDING 1 TO AGE, ADDING 5 TO STRENGTH, ADDING 25 TO HITPOINTS
=======
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
Character.prototype.levelUp = function () {
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
<<<<<<< HEAD
//CRUSHER, WARRIOR, AGE: 25, STRENGTH: 10, HITPOINTS: 75
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
//CRUSHER IS ALIVE
warrior.isAlive();


rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
//NAME: DODGER, TYPE: ROUGE, AGE: 24, STRENGTH: 25, HOTPOINTS: 75 
=======
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
>>>>>>> 40197902a237d56700eab49478b04f4f0e3f60f4
rogue.printStats();
