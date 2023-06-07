//This is how we get input from a user
const input = require('readline-sync');

//Define a variable to hold the user's selection
let selection;

//Validate selection input. If the user enters anything other than "e" or "d", prompt them to enter a valid selection. If the user enters a valid selection, convert it to lowercase and store it in the selection variable. Concept: do...while loop
do {
selection = input.question("Enter 'e' to encode, or 'd' to decode: ");
selection = selection.toLowerCase();
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
    //Get string from user
    let string = input.question("Enter a string to encode: ");
    //Convert string to lowercase
    string = string.toLowerCase();

    //Get cipher from user
    let cipher = input.question("Enter a cipher of length " + string.length + ": ");
    //Convert cipher to lowercase
    cipher = cipher.toLowerCase();

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

    //Define a variable to hold the encoded string, must be outside of the loop. WHY?
    let encodedString = "";

    //Get ASCII value of index of string; numbers greater than 25 should rollover to 0
    for (let i=0; i < string.length; i++) { 
        let base = string.charCodeAt(i) - 97;
        let offset = cipher.charCodeAt(i) - 97;
        let shift = (base + offset);
            if (shift > 25) {
                shift = shift - 26;
            }
        //Convert ASCII value back to a letter, lowercase 'a' is 97; add 97 to shift to get ASCII value of encoded letter
        let encoded = String.fromCharCode(shift + 97);
        encodedString += encoded;
    }
    console.log(encodedString);

}//End of encode function

//Define decode function
function decode() {
    //Get string from user
    let string = input.question("Enter a string to decode: ");
    //Convert string to lowercase
    string = string.toLowerCase();

    //Get cipher from user
    let cipher = input.question("Enter a cipher of length " + string.length + ": ");
    //Convert cipher to lowercase
    cipher = cipher.toLowerCase();

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

//Define a variable to hold the decoded string, must be outside of the loop. WHY?
let decodedString = "";

//Get ASCII value of each index of string; numbers less 0 should rollover to 25
for (let i=0; i < string.length; i++) { 
    let base = string.charCodeAt(i) - 97;
    let offset = cipher.charCodeAt(i) - 97;
    let shift = (base - offset);
        if (shift < 0) {
            shift = shift + 26;
        }
    //Convert ASCII value back to a letter, lowercase 'a' is 97; add 97 to shift to get ASCII value of encoded letter
    let decoded = String.fromCharCode(shift + 97);
    decodedString += decoded;
}
console.log(decodedString);
}//End of decode function


// ANSWER: Functions can be called before they are defined because of hoisting. Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

//ANSWER: The reason the encodedString and decodedString variables must be defined outside of the loop is because if they are defined inside the loop, they will be redefined each time the loop runs. This means that the variable will only hold the value of the last iteration of the loop.