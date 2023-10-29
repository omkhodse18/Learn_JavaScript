/*
    High Order function

        forEach
        filter
        map
        sort
        reduce
*/

let companies = [
  { name: "Google", category: "Product-Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product-Based", start: 1987, end: 2007 },
  { name: "Microsoft", category: "Product-Based", start: 1985, end: 2012 },
  { name: "Mindtree", category: "Service-Based", start: 1991, end: 2004 },
  { name: "TCS", category: "Service-Based", start: 1999, end: 2014 },
];

const ages = [33, 12, 20, 16, 21, 34, 42, 1, 33, 45, 67, 42, 5, 3, 33];

//normal way
/*for (let index = 0; index < companies.length; index++) {
  console.log(companies[index]);
}*/

console.log("Js way");

//JS way
/**
 *  array.forEach(callbackFunction(value,index,<arrayName-itself>){
 *      //Body of function
 *  });
 */

// companies.forEach((value) => {
//   console.log(value);
//   console.log("Category : " + value.category);
// });

// Hey this is boaring write this in one line
companies.forEach((value, index) => console.log(value, index));

// =============>>>>>>>>>>>>>> Filter
// Normal way
/* 
for (let index = 0; index < ages.length; index++) {
  if (ages[index] > 20) {
    console.log(ages[index]);
  }
}
*/

// JS Way
let age = ages.filter((value) => {
  if (value > 20) {
    return true;
  }
});

console.log(age);

// Do this in one line
let categories = companies.filter(
  (value) => value.category === "Product-Based"
);
console.log(categories);

// ====================>>>>>>>>>>>>>>>>>> Sort
let sorted = ages.sort((num1, num2) => {
  if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
});

console.log(sorted);

// let sorted = ages.filter((num1, num2) => num1 - num2);
// console.log(sorted);

let sorted2 = companies.sort((val1, val2) =>
  val1.start > val2.start ? 1 : -1
);

console.log(sorted2);

// =====================>>>>>>>>>>>>>>>>> Reduce
// Normal way
let total = 0;
for (let index = 0; index < ages.length; index++) {
  total += ages[index];
}

console.log(total);

// JS WAY

let totalSum = ages.reduce((acc, val) => acc + val);
console.log(totalSum);

let totalSum2 = ages.reduce((acc, val) => acc + val, 1000);
console.log(totalSum2);
