const name = "Omkar";
/* 
Q -> why there is a strike on variable name(only for name);
Ans 1 -> Most likely linting warning. Its complaining that since you are not changing the value of name after the 
declaration, you can make it constant.

Ans 2 -> Just to clarify, whenever something is striked out, its a warning that it basically used a lot and might be 
interfered with. Its just a warning for variables with basic names. You don't need to worry about it

=> Answers are taken from stackoverflow
*/

// name = "Mahesh";
console.log(name);

// Operators
/*
Arithmetic
Assignment +=, -= ...
Copmarison 
logical
Ternary => (condition) ? true : false
Bitwise AND & OR
*/

// equality = 1. Loose equality(==,!=) and strict equality(===,!==)

/*
    Note :
    Loose equality checks only value but strict equality checks value + data type
*/

let a = 5;
let b = "5";
console.log(a == b); // true
console.log(a === b); //false

console.log(a !== b); //true
console.log(a != b); //false

console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(true || true);

console.log(false || 5);
console.log(false || 5 || 1);
console.log(false || 0 || 8 || 2);
console.log(false || 1 || 8 || 2);

console.log(false && false);
console.log(false && true);
console.log(true && true);
console.log(false && false);

console.log(false && 1);

// falsy and truthy values
// falsy contains undefined, NaN, NULL, false, 0, ' ' values
// Truthy contains true and anything that is not a falsy value
