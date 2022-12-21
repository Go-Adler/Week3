//Assignment Q2

let someText = require("readline-sync")

let num1 = someText.question("Enter first number: ")
let num2 = someText.question("Enter second number: ")

console.log("sum is : " + (parseInt(num1) + parseInt(num2)))