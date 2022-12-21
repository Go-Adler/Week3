//Assignment Q3

let someText = require("readline-sync")

P = someText.question("Enter principal amount: ")
R = someText.question("Enter interest rate: ")
n = someText.question("Enter number of years: ")

console.log("Simple interest is : " + ((parseInt(P)*parseFloat(R)*parseFloat(n)/100)))  