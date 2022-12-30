// Create an array with 5 empty elements
let someText = require("readline-sync")
const arr = new Array(5);

// Use the forEach method to iterate over the elements of the array
arr.forEach((element, index) => {
  // Prompt the user to enter a value for the current element
  const value = someText.question("Enter element: ")

  // Assign the value to the current element
  arr[index] = value;
});

console.log(arr); // Prints the array of elements with the user-entered values
