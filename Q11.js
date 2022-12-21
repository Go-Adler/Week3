let someText = require("readline-sync")
let userInput = someText.question("Enter number for elements in array: ")
let arrayLength = parseInt(userInput)
let array = new Array(arrayLength)

console.log("Enter values for array: ")
for(let i = 0; i < arrayLength; i++) {
    array[i] = someText.question("Enter value " + (i +  1) + ": ")
}

let sum = 0
for (let i = 0; i < arrayLength; i++) {
    if( array[i]%2==0) {
        sum = sum + 1
    }
}

console.log("Number of even numbers in the given array is " + sum)