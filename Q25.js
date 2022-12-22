let someText = require("readline-sync")
console.log("Choose 1 for Bill Bates")
console.log("Choose 2 for Steve Jobs")
console.log("Choose 3 for Mockingjay: The Final Book of The Hunger Games")
let userIn = someText.question("Enter your choice: ")
let choice = parseInt(userIn)

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

switch(choice) {
case 1:
    if(library[0].status === false) {
        console.log("You still need to read " + library[0].title + "by " + library[0].author + "."  )
    } else {
        console.log("Already read " + library[0].title + "by " + library[0].author + "." )
    }
    break
case 2:
    if(library[1].readingStatus === false) {
        console.log("You still need to read " + library[1].title + "by " + library[1].author + "."  )
    } else {
        console.log("Already read " + library[1].title + "by " + library[1].author + "." )
    }
    break
case 3:
    if(library[2].readingStatus === false) {
        console.log("You still need to read " + library[2].title + "by " + library[2].author + "."  )
    } else {
        console.log("Already read " + library[2].title + "by " + library[2].author + "." )
    }
    break
}
