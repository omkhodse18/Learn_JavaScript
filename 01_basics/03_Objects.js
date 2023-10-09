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

let a = {}; // Empty object or we make 'a'  empty objects.
