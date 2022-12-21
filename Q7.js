let someText = require("readline-sync")

let userInput = someText.question("Enter a number to display multiplication table: ")
let number = parseInt(userInput)

for (let i = 1; i <= 10; i++) {
    console.log(i + " x " + number + " = " + (i * number))
}