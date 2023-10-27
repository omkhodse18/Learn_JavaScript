/*
    Async await => Special syntax used to work with promises
    Async function returns promise
*/

// Runs this on console
async function abcd() {
  return "What going on";
}
console.log(abcd());

async function whether() {
  let delhiWeather = new Promise(function (resolve, reject) {
    console.log("Summer = Weather is hot");
  });

  let hydWeather = new Promise(function (resolve, reject) {
    console.log("Winter = Weather is cool");
  });

  let dM = await delhiWeather;
  let hM = await hydWeather;

  return [dM, hM];
}

console.log(whether());
