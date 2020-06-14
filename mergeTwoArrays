function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  // Input: 2 sorted arrays
    // Join the two arrays and re-sort into order
  // Output: 1 sorted array
  
  let result = myArray.concat(alicesArray);

  result.sort((a, b) =>  a < b ? -1: 1)

  return result;
}

// First solution does not have the best time cost ^

function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array
  // Input: 2 sorted arrays
    // Create a new empty array 
    // Grab the first item of each array since 
    // they should both be the smallest number and compare and take the
    // smaller number and put it into the new array
    // CASES: different lengths? What if one ran out before the other? 
  // Output: 1 sorted array
  
  let resultArray = [];
  
  let myCurrentIndex = 0;
  let aliceCurrentIndex = 0;
  let resultCurrentIndex = 0;
  
  while (resultArray.length < (myArray.length + alicesArray.length)) {
    let myArrayFinish = myCurrentIndex >= myArray.length;
    let aliceArrayFinish = aliceCurrentIndex >= alicesArray.length;
    
    // When my array is not done, and if Alice's is done OR when my current item is less than
    // alice's current item
    if (!myArrayFinish && (aliceArrayFinish || (myArray[myCurrentIndex] < alicesArray[aliceCurrentIndex]))){
      resultArray[resultCurrentIndex] = myArray[myCurrentIndex];
      myCurrentIndex++;
    } else {
      // When my array is done and alice's is not, 
      // OR alice's current item is less than my current item
      resultArray[resultCurrentIndex] = alicesArray[aliceCurrentIndex];
      aliceCurrentIndex++;
    }
    // Continue to increment the result array;
    resultCurrentIndex++;
  }
  
  return resultArray;
  
}
