let meraPromise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("I am inside promise 1");
  }, 5000);
  resolve("Promise 1 resolved");
  return meraPromise1;
});

meraPromise1
  .then((value) => {
    let meraPromise2 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("I am inside promise 2");
      }, 3000);
      resolve("Promise 2 resolved");
    });
    console.log(value);
    return meraPromise2;
  })
  .then((value) => {
    //lets say its promise 3
    console.log("I am inside promise 3");
    console.log(value);
  });
