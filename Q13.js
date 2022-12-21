let someText = require("readline-sync")
let userInput = someText.question("Enter the string: ")

let array = Array.from(userInput)
let length = userInput.length
let flag = false
for (let i = 0; i < length; i++) {
    if(array[i] !== array[length - 1 - i]) {
        flag = true
        break
    }
}

if ( flag != false) {
    console.log(userInput + " is not a palindrome")
} else {
    console.log(userInput + " is a palindrome")
}

