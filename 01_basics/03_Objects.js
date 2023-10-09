/*
What is Objects?
=> Collection of key-value pairs.
*/

// Object create
const rectangle = {
  length: 5,
  breadth: 6,

  draw: function () {
    console.log("We are in rectangle object and draw1");
  },

  // or

  draw2() {
    console.log("We are in rectangle object and draw2");
  },
};

console.log(rectangle.length);
console.log(rectangle.breadth);
console.log(rectangle.draw);
rectangle.draw();
rectangle.draw2();

/*
Object Creation :
    1. Factory Fuction 
    2. Constructor Function
*/

// 1. Factory Function
function objectCreation(name, lastName) {
  let myObject = {
    name: name, // this also be done
    lastName, // Or this

    age: function () {
      console.log("I am 21 years old.");
    },
  };

  return myObject;
}

let obj1 = objectCreation("Omkar", "Khodse");
console.log(obj1.name);
console.log(obj1.lastName);
console.log(obj1.age());

// Constructor Fucntion => nothing but it only initialize or define the property
// this keyword => this refers to the current object on which we are working.

function ConstructorFuction(fn, ln) {
  this.name = fn;
  this.lastName = ln;
  this.draw = function () {
    console.log("draw");
  };
}

let obj2 = new ConstructorFuction("ABC", "XYZ");
console.log(obj2);
console.log(obj2.name);
console.log(obj2.lastname);
console.log(obj2.draw());

let a = {}; // Empty object or we make 'a'  empty objects.

// Dynamic nature of objects
obj2.color = "Red"; // Dynamically added property
console.log(obj2);

delete obj2.color;
console.log(obj2);
