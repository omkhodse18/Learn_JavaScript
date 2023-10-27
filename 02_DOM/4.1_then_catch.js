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
*/

let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Awesome, I am inside promise 1");
  }, 8000);
  resolve(233); // you can put any value
});

myPromise1.then((value) => {
  console.log(value);
});

let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Awesome, I am inside promise 2");
  }, 8000);
  reject(new Error("Error occured in promise 2")); // you can put any value
});

myPromise2.catch((error) => {
  console.log("Oops error occurs in promise 2");
});

// You can also use then for handling errors

let meraVada = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("I am inside mera Vada");
  }, 3000);

  //   resolve("Mera vada resolve");
  reject("Mera vada not resolved");
});

meraVada.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
