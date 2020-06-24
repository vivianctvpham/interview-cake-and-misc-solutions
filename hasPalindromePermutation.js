function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  // Input: String;
    //Loop through and keep count of each character in the string;
    //If there is more than one odd number for character counts--return false;
    //Otherwise return true;
  //Output: Boolean;

  let oddLetters = new Set();
  
  for (let i = 0; i < theString.length; i++){
    let char = theString[i];
    oddLetters.has(char) ? oddLetters.delete(char) : oddLetters.add(char)
  }
  return oddLetters.size <= 1;
}
