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
