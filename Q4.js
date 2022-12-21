let someText = require("readline-sync")

let markIn  = someText.question("Enter the marks: ")
mark = parseFloat(markIn)
if (mark < 50 && mark > 0) {
    console.log("failed")
} else if (mark < 0 || mark > 100) {
    console.log ("invalid marks")
} else {
    console.log("Passed")
}