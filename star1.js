let just = require("readline-sync")

let limit = just.question("Enter how many rows: ")

for (i=0; i < limit; i++) {
    for (j=0; j <=i; j++) {
        process.stdout.write("*")
    }
    console.log("")
}