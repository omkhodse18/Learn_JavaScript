// ======================================= SECTION 1 ===================================================
// Inbuilt objects => math objects
// Go through this => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// Math objects => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// ======================================= SECTION 2 ===================================================
// String

let name = "Omkar"; // This will create primitive string or this is primitive string
// Jab bhi primitive string ke sath dot notation use karte hain tabh JS internally as a string object treat karta hain

// To make string object, we use string constructor
console.log(name.length);
console.log(name[2]);
console.log(name.includes("Om"));
console.log(name.toUpperCase());
// Go throgh more properties => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let msg = "Hello all, how's life going?";
let words = msg.split(" "); //This will split msg on basis of space and store it in words just like an array
console.log(words);
console.log("Words type = : " + typeof words);

let lastName = new String("Khodse"); // This will create object string

console.log("Lastname type : " + typeof lastName);
console.log("Name type : " + typeof name);

// ======================================= SECTION 3 ===================================================
// Template Literals
// => Agar muje mere msg ko kisi bhi tarah print karna hain to template literals use karte hain
// => Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let message = `Hi ${name + lastName}
                How are you
                Keep it up
Javascript`;

console.log(message);
