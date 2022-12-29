// for number

let someText = require("readline-sync")
let my_string = someText.question("Enter a string: ")
    my_string = parseInt(my_string)
try {
    console.log(my_string.split("").reverse().join(""))
} catch(e) {
    console.log("Invalid " + e)
} finally {
    console.log("Type of my_string is: " + typeof(my_string))
}