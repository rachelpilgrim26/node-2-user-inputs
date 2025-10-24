// Let's make a tip calculator with Node.js!
console.log(process.argv);
// Run this file with the node command:
// node tipCalculator.js

let bill = Number(process.argv[2]);

let tipPercentage = Number(process.argv[3]);

let numGuests = Number(process.argv[4]);

let tipAmount = bill * tipPercentage;
console.log("tipAmount", tipAmount);

let totalBill = bill + tipAmount;
console.log("totalBill", totalBill);

let guest = totalBill / numGuests;
console.log("guest", guest);
