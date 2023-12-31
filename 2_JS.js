/* 
const t1 = performance.now();

let myDiv = document.createElement("div");

function clickedFuction(event) {
  console.log("Clicked on para number " + event.target.textContent);
}

for (let i = 1; i <= 100; i++) {
  let childElement = document.createElement("p");
  childElement.textContent = "This is para number " + i;

  childElement.addEventListener("click", clickedFuction);

  myDiv.appendChild(childElement);
}

document.body.appendChild(myDiv);
const t2 = performance.now();

console.log("This takes " + (t2 - t1) + " ms");
*/

async function whether() {
  let delhiWeather = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Summer = Weather is hot");
    }, 7000);
  });

  let hydWeather = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("Winter = Weather is cool");
    }, 5000);
  });

  let dM = await delhiWeather;
  let hM = await hydWeather;

  return [dM, hM];
}
