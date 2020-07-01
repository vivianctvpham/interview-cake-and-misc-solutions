function getProductsOfAllIntsExceptAtIndex(intArray) {

  // Make a list of the products
  // Input: Array of ints
    // Break down the products to products of all ints before index and after
  // Output: Array of products except for current index
  
  // For edge cases, should not be less than 2 ints in the array
  // --Less than 2 ints, there won't be any other ints to calculate product
  
  if (intArray.length < 2) throw new error; 
  
  const productsOfIntsExceptAtIndex = [];
  
  // For each int, find the product of all ints before it, and track
  // total product each time
  
  let productTrack = 1;
  
  for (let i = 0; i < intArray.length; i++) {
    // Giving value of 1 because there's no ints before index 0
    productsOfIntsExceptAtIndex[i] = productTrack;
    
    productTrack *= intArray[i];
  }
  
  productTrack = 1;
  // Iterate backwards to calculate products of ints after index
  // As you iterate through, multiply product so far to the corresponding
  // index in the populated array in order to get ALL products of ints 
  
  for (let i = intArray.length - 1; i >= 0; i--){
    productsOfIntsExceptAtIndex[i] *= productTrack
    productTrack *= intArray[i];
  }

  
  return productsOfIntsExceptAtIndex;
}
