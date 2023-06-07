//This is how we get input from a user
const input = require('readline-sync');

//Define a variable to hold the user's selection
let selection;

//Validate selection input. If the user enters anything other than "e" or "d", prompt them to enter a valid selection. If the user enters a valid selection, convert it to lowercase and store it in the selection variable. Concept: do...while loop
do {
selection = input.question("Enter 'e' to encode, or 'd' to decode: ");
selection = selection.toLowerCase();
console.log(selection);
}
while (selection !== "e" && selection !== "d");

//Call encode or decode function based on selection. Question: WHY CAN I CALL A FUNCTION BEFORE IT IS DEFINED?? Answer at bottom of file.
if (selection === "e") {
    encode();
}
else if (selection === "d") {
    decode();
}
else {
    console.log("FATAL ERROR");
}

//Define encode function
function encode() {
    let string = input.question("Enter a string to encode: ");
    let cipher = input.question("Enter a cipher of length " + string.length + ": ");

    //Validate that string and cipher are both NaN. If not, prompt user to re-enter the string and/or cipher

    while (!isNaN(string)) {
        string = input.question("String must contain only letters. Please re-enter: ");
    }

    while (!isNaN(cipher)) {
        cipher = input.question("Cipher must contain only letters. Please re-enter: ");
    }

    //String and cipher must be the same length. If not, prompt user to re-enter a cipher of appropriate length
    while (cipher.length !== string.length) {
        cipher = input.question("Your cipher had " + cipher.length + " characters. Enter a cipher of length " + string.length + ": ");
    }

console.log(string);
console.log(cipher);


}

//Define decode function
function decode() {
    console.log("decode");
}


// ANSWER: Functions can be called before they are defined because of hoisting. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.