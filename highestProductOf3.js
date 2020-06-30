function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  // Input: Array of integers (at least always 3)
    // Sort the array
    // Track highest and lowest product of 2 as we loop through (might be neg)
    // Track highest and lowest number 
    // Track highest product of 3
  // Output: Integer (highest product of the three ints)
  
  // Setting up edge cases since we need the highest product of 3, 
  // we will need at least 3 ints in the array
  if (arrayOfInts.length < 3) throw new error;
  
  //Setting up base values
  let highestProductOf3 = (arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]);
  let highestProductOf2 = (arrayOfInts[0] * arrayOfInts[1]);
  let lowestProductOf2 = (arrayOfInts[0] * arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  
  //Since the lowest and highest is either index 0 or 1, I'll start at 2
  
  for (let i = 2; i < arrayOfInts.length; i++) {
    
    // Iterates through the array and continuously updates each variable
    const currentInt = arrayOfInts[i];
    
    highestProductOf3 = Math.max(highestProductOf3, (currentInt * highestProductOf2), (currentInt * lowestProductOf2));
    
    highestProductOf2 = Math.max(highestProductOf2, (currentInt * highest), (currentInt * lowest));
    
    lowestProductOf2 = Math.min(lowestProductOf2, (currentInt * highest), (currentInt * lowest));
    
    highest = Math.max(highest, currentInt);
    
    lowest = Math.min(lowest, currentInt);
  }
  

  return highestProductOf3;
}
