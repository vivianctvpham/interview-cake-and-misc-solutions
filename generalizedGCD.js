/*
Problem: 
The greatest common divisor (GCD), also called the highest common factor (HCF) of N numbers is the largest positive integer that divides 
all numbers without giving a remainder.

Write an algorithm to determin the GCD of N positive integers.
*/

function generalizedGCD(num, arr) {
//Find the lowest num in the array
let lowest = Math.min(...arr);

for (let i = lowest; i > 1; i--) {
let isCommonDivisor = true;

//Iterate through the array to check if it is divisible by the lowest
  for (let j = 0; j < num; j++) {
    if (arr[j] % i !== 0) {
    isCommonDivisor = false; 
    break;
  }
}

  if (isCommonDivisor) {
    return i;
  }
}

return 1; 

}
