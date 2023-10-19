// Functions => https://www.javascripttutorial.net/javascript-function/
// ======================================= SECTION 1 ===================================================
function say(message) {
  console.log(message);
}

//Function call
say("Hello");

/*
----------------> Function hoisting
In JavaScript, you can use a function before declaring it. For example:

//////

    showMe(); // a hoisting example

    function showMe(){
        console.log('an hoisting example');
    }

/////////

This feature is called hoisting.

==========> Function hoisting is a mechanism which the JavaScript engine physically moves function declarations to the top of the code before executing them.

The following shows the version of the code before the JavaScript engine executes it:

function showMe(){
    console.log('a hoisting example');
}

showMe(); // a hoisting example
*/

// ======================================= SECTION 2 ===================================================
// --------------------------------------------  REMEMBER  ------------------------------------------------------------
/*
    Hoisting only shift function declaration not function assignment

    // This will not work
    result()
    
    function say(message) {
        console.log(message);
    }

//Function call
    let result = say("Hello");
    console.log("Result:", result);
*/

function sum(a, b) {
  // Argument is special object accessible inside functions that contains the values of the arguments passed to that function.
  console.log(arguments);
  return a + b;
}

console.log(sum(2, 4));
console.log(sum(2, 4, 5, 6, 7, 8));
