// =============================================================================================

/*
    Q. API(Application PRogramming Interface)
    => An API, or Application Programming Interface, is a set of rules and protocols that allow different software applications to communicate with each other.

    Q. Feature of Async code?
    => clean and concise
    => Better error handling
    => Easier debugging
*/

// ============================================= Promises ================================================
/*
    => The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    => A Promise is in one of these states:
            A> pending: initial state, neither fulfilled nor rejected.
            B> fulfilled: meaning that the operation was completed successfully.
            C> rejected: meaning that the operation failed.

    => For parallel excution in background
    => Jab bhi async code likna hoo to uss samai promise ka use karo

    syntax:
    let p = new promise(callback_func(resolve,reject){
        // code to execute
    });

    Successful call completions are indicated by the "resolve" function call, and errors are indicated by the "reject" function call.

    let promise = new Promise(function(resolve, reject) {    
    // Make an asynchronous call and either resolve or reject
    });
*/

let myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Awesome, I am inside promise");
  }, 8000);
  resolve(233); // you can put any value
});

console.log("Oops! I am outside promise");

// let myPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Awesome, I am inside promise");
//   }, 5000);
//   reject(new Error("Oops!")); // you can put any value
// });

// +++++++++++++++++++++++++++ Let run 2 promises for parallel execution ++++++++++++++++++++++++++++++++
let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Awesome, I am inside promise 1");
  }, 5000);
  //   resolve(233); // you can put any value
});

console.log("Oops! I am outside of promise 1");

let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Awesome, I am inside promise 2");
  }, 3000);
  //   resolve(233); // you can put any value
});

console.log("Oops! I am outside of promise 2");

/*
A> .then()
**** When a promise is "fulfilled"
    When a promise is fulfilled, you can access the resolved data in the "then" method of the promise:

        promise.then((value) => {
            // use value for something
        })

B> .catch()
**** When a promise is rejected
    When a promise is rejected (that is, the promise fails), you can access the error information returned in the catch method of the promise:

        promise.catch(error => {
          // interpret error and maybe display something on the UI
        })


        ++++++++++++ check example 4.1 and 4.2 ++++++++++++++++++++++++++

*/

// ++++++++++++++++ Go through "Closures" (Watch last 10 min of video) +++++++++++++++++++++++++
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
