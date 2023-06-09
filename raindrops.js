//Convert a number into a string that has raindrop sounds corresponding to certain potential factors. A factor is a number that evenly divides into another number, leaving no remainder. The simplest way to test if one number is a factor of another is to use the modulo operation. The rules of raindrios are that if a given number:
// has 3 as a factor, add 'Pling' to the result.
// has 5 as a factor, add 'Plang' to the result.
// has 7 as a factor, add 'Plong' to the result.
//does not have 3, 5, 7 as factors, the result should be the digits of the number.

//Examples:
//28 has 7 as a factor, but not 3 or 5, so the result would be "Plong".
//30 has both 3 and 5 as factors, but not 7, so the result would be "PlingPlang".
//34 does not have any of 3, 5, or 7 as a factor, so the result would be "34".

