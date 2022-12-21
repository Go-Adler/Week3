var create = require('readline-sync')

num1 = create.question("Enter number 1: ")
num2 = create.question("Enter number 2: ")

console.log(num1 + "," + num2)

if (num1 > num2) {
    console.log (num1 + " is greater than " + num2)
} else {
    console.log (num2 + " is greater than " + num1)
}