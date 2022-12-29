// for string
let someText = require("readline-sync")
let my_string = someText.question("Enter a string: ")
    my_string = my_string.split("").reverse().join("")

try {
    console.log("Reversed string is: " + my_string)
} catch(e) {
    console.error("error due to" + e)
} finally {
    console.log("Type of my_string is: " + typeof(my_string))
}
