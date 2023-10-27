async function utility() {
  let fetchCall = await fetch("https://dog.ceo/api/breeds/image/random"); // fetch always returns promise
  let content = await fetchCall.json(); // Convert fetchCall into json format (JavaScript Object Notation);
  return content;
}

utility();
