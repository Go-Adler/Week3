let someText = require("readline-sync")
let userInput = someText.question("Enter the size of array: ")
let limit = parseInt(userInput)

let array1 = [], array2 = [], arraySum = []

for(let i = 0; i < limit; i++) {
    array1[i] = []
    array2[i] = []
    arraySum[i] = []
}

console.log("Enter elements for array 1:")
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        array1[i][j] = someText.question("Enter element at position (" + i + ", " + j + "): ")
    }
}

console.log("Enter elements for array 2:")
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        array2[i][j] = someText.question("Enter element at position (" + i + ", " + j + "): ")
    }
}


for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        arraySum[i][j] = parseInt(array1[i][j]) + parseInt(array2[i][j])
    }
}

console.log("Sum of two arrays is: ")
for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
        process.stdout.write(arraySum[i][j] + "   ")
    }
    console.log()
}