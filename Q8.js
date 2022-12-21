let someText = require("readline-sync");

let userInput = someText.question("Enter a limit: ");
let number = parseInt(userInput);
let sum = 0;

for (let i = 1; i <= number; i++ )  {
    if(i % 2 !== 0) {
        sum = sum + i;
    }
}

console.log("The sum of all odd numbers upto " + number + " is: " + sum)