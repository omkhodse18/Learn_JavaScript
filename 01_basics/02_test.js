const name = "Omkar";
/* 
Q -> why there is a strike on variable name(only for name);
Ans 1 -> Most likely linting warning. Its complaining that since you are not changing the value of name after the 
declaration, you can make it constant.

Ans 2 -> Just to clarify, whenever something is striked out, its a warning that it basically used a lot and might be 
interfered with. Its just a warning for variables with basic names. You don't need to worry about it

=> Answers are taken from stackoverflow
*/

name = "Mahesh";
console.log(name);
