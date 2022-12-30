let someText = require("readline-sync")
let userIn = someText.question("Enter size of array: ")
let size = parseInt(userIn)

let array = [size]

for (let i = 0; i < size; i++) {
    userIn = someText.question("Enter element " + (i + 1) + ": ")
    array[i] = parseInt(userIn)
}

function callBackFn (array) {
    let sum = parseInt(0)
    array.forEach(element => {
        sum = sum + element
    });
    console.log("The sum is: " + sum)
    if (sum % 2 === 0) {
        return true
    } else {
        return false
    }
}

function myFilter(myArray, callBackFn) {
  returnValue = (callBackFn(myArray))
  console.log(returnValue)
}

myFilter(array, callBackFn)