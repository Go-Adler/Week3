let someText = require("readline-sync")
let userIn = someText.question("Enter a number: ")
let number = parseInt(userIn)

let flag = true;
for (let i = 2; i <= number / 2; i++) {
    if(number % i === 0) {
        flag = false
        break
    }
}

if (flag === false ) {
    console.log(number + " is not a prime number.")
} else {
    console.log (number + " is a prime number.")
}