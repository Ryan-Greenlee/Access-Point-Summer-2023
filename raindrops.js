//Convert a number into a string that has raindrop sounds corresponding to certain potential factors. A factor is a number that evenly divides into another number, leaving no remainder. The simplest way to test if one number is a factor of another is to use the modulo operation. The rules of raindrios are that if a given number:
// has 3 as a factor, add 'Pling' to the result.
// has 5 as a factor, add 'Plang' to the result.
// has 7 as a factor, add 'Plong' to the result.
//does not have 3, 5, 7 as factors, the result should be the digits of the number.

//Examples:
//28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
//30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
//34 does not have any of 3, 5, or 7 as a factor, so the result would be "34".

//SOLUTION:

//Get the number from the user
const input = require('readline-sync');
//Ensure the input is a number
let number = parseInt(input.question('Enter a number: '));

while (isNaN(number)) {
    number = parseInt(input.question('Enter a number: '));
}

//Define a string to hold the raindrop sounds
let raindrops = '';

//Check if the number has 3 as a factor
if (number % 3 === 0) {
    raindrops += 'Pling';
    }
    
//Check if the number has 5 as a factor
if (number % 5 === 0) {
    raindrops += 'Plang';
    }

//Check if the number has 7 as a factor
if (number % 7 === 0) {
    raindrops += 'Plong';
    }

//If the number has none of the factors, return the number. This is only one method; several exist.
if (raindrops === '') {
    raindrops = number;
    }

//Print the result
console.log(raindrops);
