// ======================================= SECTION 1 ===================================================
// Arrays => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let numbers = [1, 2, 3, 4, 5]; // Primitive array
console.log(numbers);

// ----------------------------------    Insertion in arrays     ----------------------------------
// at Begin => .unshift(any number)
// At Middle => .splice(index, number of delete count, things to add)
// At End => .push(any number)

numbers.unshift(8);
console.log(numbers);

numbers.splice(2, 0, 3, 4, 5);
console.log(numbers);
numbers.splice(4, 0, "a", "b", "c");
console.log(numbers);
// idx = 2, number of delete count = 0, numbers to add = 3,4,5

numbers.push(7);
console.log(numbers);

// ======================================= SECTION 2 ===================================================
// ----------------------------------    Searching in arrays     ----------------------------------
if (numbers.indexOf(8) != -1) {
  console.log("Present");
} else {
  console.log("Absent");
}

// Achi practice

console.log(numbers.includes(8));

// In Array of Objects
let marks = [
  { ID: 231, score: 87.6, Grade: "A" },
  { ID: 232, score: 66.5, Grade: "D" },
  { ID: 233, score: 93.3, Grade: "A+" },
  { ID: 234, score: 75.4, Grade: "C" },
  { ID: 235, score: 59.1, Grade: "E" },
];

console.log(marks);

console.log(marks.indexOf({ ID: 231, score: 87.6, Grade: "A" }));
// This results -1 beacause this are objects. and both are having different references
// This goes same with includes function
// To search in array of objects use callback function

//  Callback function (Also called predicate function)
// =>  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// Go through this => https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// Lets says func1(func2()) here func1 is calls func2 to do certain task, so func2() is callback function

// To search in array of object use .find() method
/*
    arrayName.find(callback_function(arguments(if any)){
        code of execution
    });
*/

let isPresent = marks.find(function (marks) {
  return marks.ID == 231;
});

console.log(isPresent);

isPresent = marks.find(function (marks) {
  return marks.Grade == "B";
});
console.log(isPresent);

// Lets shorten this code using arrow funtion
//                      Arhument | if code is of one line then
isPresent = marks.find((score) => marks.ID == 234);

// ----------------------------------    Remove  Element from array     ----------------------------------
// at Begin => .shift()
// At Middle => .slice(index, number of delete count)
// At End => .pop()

console.log(numbers);

numbers.shift();
console.log("shift : " + numbers);

numbers.splice(2, 3);
console.log("Middle : " + numbers);

numbers.pop();
console.log("End:" + numbers);

// ----------------------------------    Emptying an array     ----------------------------------
// Go through this => https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/
// Read Carefully

/*
let a = [1,2,3];
a = [];
This code assigned the array a to a new empty array. It works perfectly if you do not have any references to the original array

Here [1,2,3] are automatically deleted by garbage collector if you do not have any references to the original array
*/

// ======================================= SECTION 3 ===================================================
// ----------------------------------    Combining and slicing an array     ----------------------------------
let a = [1, 2, 3];
let b = [4, 5, 6];

let combined = a.concat(b);
console.log(combined);

let sliced = combined.slice(2, 4);
console.log(sliced);

// ----------------------------------    Spread operator   (...)  ----------------------------------
let combined2 = [...a, ...b];
let combined3 = [...a, "a", ...b, "false"];
console.log(combined2);
console.log(combined3);
let combined4 = [...combined3];
console.log(combined4);

// ======================================= SECTION 4 ===================================================
// ----------------------------------    Iterating array     ----------------------------------

for (value of combined4) {
  console.log(value);
}
// For each , Here val(or any variable) is like 'i'.
combined3.forEach((val) => console.log(val));

// ======================================= SECTION 5 ===================================================
// ----------------------------------    Joining and splitting     ----------------------------------

let msg = "Hello all, how's life going?";
let words = msg.split(" "); //This will split msg on basis of space and store it in words just like an array(It is array)
console.log(words);
console.log("Words type = : " + typeof words);

let joined = words.join(" ");
console.log(joined);
