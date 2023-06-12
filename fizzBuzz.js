//FIZZBUZZ Challenge
//Write a program that prints the numbers from 1 to 100.
//But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
//If a number is a multiple of both three and five, then print “FizzBuzz”.
//If it is neither, print the number.

for (let i=1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}