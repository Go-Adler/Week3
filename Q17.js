    let someText = require("readline-sync")

    console.log("choose 1 for addition.")
    console.log("choose 2 for subtraction.")
    console.log("choose 3 for multiplication.")
    console.log("choose 4 for division.")

    let userSelect = someText.question("Enter your choice: ")
    let  input = parseInt(userSelect)

    switch(input) {
    case 1:
        addition()
        break
    case 2:
        subtraction()
        break
    case 3:
        multiplication()
        break
    case 4:
        division()
        break
    default:
        console.log("Wrong choice.")
        break
    }

function addition () {
    let num1 = someText.question("Enter number 1: ")
    let num2 = someText.question("Enter number 2: ")
    let result = parseInt(num1) + parseInt(num2)
    console.log (num1 + " + " + num2 + " = " + result)
}

function subtraction () {
    let num1 = someText.question("Enter number 1: ")
    let num2 = someText.question("Enter number 2: ")
    let result = parseInt(num1) - parseInt(num2)
    console.log (num1 + " - " + num2 + " = " + result)
}

function multiplication () {
    let num1 = someText.question("Enter number 1: ")
    let num2 = someText.question("Enter number 2: ")
    let result = parseInt(num1) * parseInt(num2)
    console.log (num1 + " * " + num2 + " = " + result)
}

function division () {
    let num1 = someText.question("Enter number 1: ")
    let num2 = someText.question("Enter number 2: ")
    let result = parseInt(num1) / parseInt(num2)
    console.log (num1 + " / " + num2 + " = " + result)
}