let someText = require("readline-sync")
let input = someText.question("How many elements you need to enter: ")
let arrayLength = parseInt(input)
const array1 = new Array(arrayLength)
const array2 = new Array(arrayLength)

console.log("Enter array 1 elements: ")
for (let i = 0; i < input; i++ ) {
    array1[i] = someText.question("Enter element" + (i + 1) + (": "))
}
console.log()

console.log("Enter array 2 elements:")
for (let i = 0; i < input; i++ ) {
    array2[i] = someText.question("Enter element" + (i + 1) + (": "))
}
console.log("\n")

let temp
for (let i = 0; i < input; i++) {
    temp = array1[i]
    array1[i] = array2[i]
    array2[i] = temp
}

console.log("Array 1 is: \n")
for (let i = 0; i < input; i++ ) {
    process.stdout.write (array1[i] + "  ")
}
console.log("\n")

console.log("Array 2 is: \n")
for (let i = 0; i < input; i++ ) {
    process.stdout.write (array2[i] + "  ")
}
console.log()