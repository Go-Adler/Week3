let someText = require("readline-sync")

let markIn = someText.question("Enter the marks: ")
let mark = parseFloat(markIn)
if (mark >= 90 && mark <= 100) {
    console.log("Grade is A.")
} else if (mark > 79 && mark < 90) {
    console.log("Grade is B.")
} else if (mark > 69 && mark < 80) {
    console.log("Grade is C")
} else if (mark > 59 && mark < 70) {
    console.log("Grade is D")
} else if (mark > 49 && mark < 60) {
    console.log("Grade is E")
} else if (mark < 50 && mark >= 0) {
    console.log("You are failed")
} else {
    console.log("Invalid entry")
}