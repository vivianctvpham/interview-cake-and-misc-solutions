function reverse(arrayOfChars) {

  // Reverse the input array of characters in place
  // Input: Array of characters
    // *Key: reverse the array in-place (Directly manipulate the array)
    // Loop through the array and swap the elements starting with the first
    // and last elements
  // Output: Reversed array of characters
  
  let left = 0;
  let right = arrayOfChars.length - 1;
  
  while (left < right) {
    let temp = arrayOfChars[left];
    arrayOfChars[left] = arrayOfChars[right];
    arrayOfChars[right] = temp;
    // After you finish swapping, move the indices towards the middle
    // to keep swapping
    left++;
    right--;
  }
}
