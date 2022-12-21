let someText = require("readline-sync")
let userInput = someText.question("Enter size of array: ")
let limit = parseInt(userInput)
let array = new Array(limit)

console.log("Enter elements to the array: ")
for (let i = 0; i < limit; i++) {
    array[i] = someText.question("Enter element " + (i + 1) + ": ")
}

let temp
for (let i = 0; i < limit-1; i++) {
    for(let j = i + 1; j < limit; j++) {
        if(array[i]< array[j]) {
            temp = array [i]
            array[i] = array [j]
            array[j] = temp
        }
    }   
}
console.log()

console.log("The sorted array is: ")
for (let i = 0; i < limit; i++) {
    process.stdout.write(array[i] + "   ")
}
console.log()