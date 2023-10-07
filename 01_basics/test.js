const accountID = 231454; // Not change
let accountMail = "abc@yahoo.com"; // let and var is same but var has issues
var accountCity = "chennai"; // Dont use var because of issue with block scope and functional scope
accountBranch = "Vijaywada"; // It automatically detect but it is not a good practice to do
let accountBalance; // No value assign to it so it will be undefined

console.log("Account ID = " + accountID);
console.log("Account Mail = " + accountMail);
console.log("Account City = " + accountCity);
console.log("Account Branch = " + accountBranch);
console.log("Account Balance = " + accountBalance);

//print in tabular format
console.table([
  accountID,
  accountMail,
  accountCity,
  accountBranch,
  accountBalance,
]);
