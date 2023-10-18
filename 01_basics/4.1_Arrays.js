// ======================================= SECTION 3 ===================================================
// Arrays => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let numbers = [1, 2, 3, 4, 5]; // Primitive array
console.log(numbers);

// Insertion in arrays
// at Begin => .push(any number)
// At Middle => .splice(index, number of delete count, things to add)
// At End => .unshift(any number)

numbers.unshift(8);
console.log(numbers);

numbers.splice(2, 0, 3, 4, 5);
console.log(numbers);
numbers.splice(4, 0, "a", "b", "c");
console.log(numbers);
// idx = 2, number of delete count = 0, numbers to add = 3,4,5

numbers.push(7);
console.log(numbers);

// Searching in array
if (numbers.indexOf(8) != -1) {
  console.log("Present");
} else {
  console.log("Absent");
}

// Achi practice

console.log(numbers.includes(8));
