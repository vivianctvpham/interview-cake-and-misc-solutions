/*Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000]. 
*/

function solution(A) {

//Creating a hash set with values within the array

let set = new Set(A);

//This variable will keep check of the smallest positive integer that doesn't exist within the array;
// "Positive" = Should always be greater than 0
let num = 1;

while (set.has(num)) {
num++
}

//Once the while loop breaks, that means the num doesn't exist within the array, and we have our result;

return num; 
}
