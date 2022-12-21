let someText = require("readline-sync")
let userInput = someText.question("Enter a limit: ")
let limit = parseInt(userInput)

for (i = 1; i <= limit; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(j + " ")
    }
    console.log("")
}