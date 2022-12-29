let someText = require("readline-sync")
let userHeight = someText.question("Enter user height: ")
let valid = false

try {
    if(!Number(userHeight)) {
        throw "not a number"
    } else if (userHeight < 40) {
        throw "tinyHeightError"
    } else if (userHeight > 200) {
        throw "hughHeightErro"
    } else {
        valid = true
    }
} catch(error) {
    console.log(error)
} finally {
    if (valid) {
        console.log("Valid")
    }
}