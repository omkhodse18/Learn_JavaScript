// ======================================= SECTION 1 ===================================================
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

// ======================================= SECTION 2 ===================================================

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

// ======================================= SECTION 3 ===================================================

// Dynamic nature of objects
obj2.color = "Red"; // Dynamically added property
console.log(obj2);

delete obj2.color;
console.log(obj2);

// ======================================= SECTION 4 ===================================================

/*
=> Types in JS 
  1. Primitive type => number, string, boolean, NULL, etc;
  2. Reference type => function, array, object

  NOTE THAT => Primitive are copied by their value 
               Reference are copide by their address/reference               
*/

// ======================================= SECTION 5 ===================================================

// For-in and for-of loops
for (keys in obj2) {
  // keys are reflected through keys variables
  // Values are reflected through obj2[keys]
  console.log(keys, obj2[keys]);
}

//for of is only use on iterables (i.e. arrays and map) not on objects but there is a hack as follows:
for (keys of Object.keys(obj2)) {
  console.log(keys, obj2[keys]);
}

// ======================================= SECTION 6 ===================================================

// How do you find property exist or not in objects?
// You can find directly
if ("color" in obj2) {
  console.log("Preset");
} else {
  console.log("Absent");
}

if ("name" in obj2) {
  console.log("Preset");
} else {
  console.log("Absent");
}

// ======================================= SECTION 7 ===================================================

/* Object cloninng in javaScript
  1. Iteration
  2. Assign => let dest = Object.assign({ } , src)
                  { } = create empty object and assigh src values to it
  3. Spread => let dest = {...src};

  Go through this website => https://www.freecodecamp.org/news/clone-an-object-in-javascript/
*/
