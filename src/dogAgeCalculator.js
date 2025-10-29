/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/
console.log(process.argv);
// show all command-line arguments as an array
let name = process.argv[2];
// get the 1st user argument (index 2): the person's name
let ageText = process.argv[3];
// get the 2nd user argument (index 3): the age as text
let age = Number(ageText);
// make the age string into a number for math
let dogYears = 0;
// start a dog-years value at 0 to fill in later

// if the human age equals 1 the dog years equal 15
if (age === 1) {
  dogYears = 15;
  // first human year equals 15 dog years
}

// if the human age equals 2 the dog years equal 24
if (age === 2) {
  dogYears = 24;
  // first two human years total 24 dog years
}

// if the human age is 3 or more use 24 plus 5 for each extra year
if (age >= 3) {
  let extra = age - 2;
  // years beyond the first two
  let more = extra * 5;
  // each extra human year adds 5 dog years
  dogYears = 24 + more;
  // total dog years for 3 and up
}

// show this final message
console.log(
  `Your dog, ${name}, is ${age} years old, but that's ${dogYears} years old in dog years!`
);
