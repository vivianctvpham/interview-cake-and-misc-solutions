function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // Check if we're serving orders first-come, first-served
    // Check the first item for servedOrders, it's either first in takeOut or dineIn
    // ^Continue to check until the servedOrders array is exhausted (recursion?)
    // If we get to the end with every customer order as checked out => return true;
    
  let takeOutIndex = 0;
  let dineInIndex = 0;
  let servedIndex = 0;
  let takeOutMax = takeOutOrders.length - 1;
  let dineInMax = dineInOrders.length - 1;
  
  for (let i = 0; i < servedOrders.length; i++) {
    if (takeOutIndex <= takeOutMax && takeOutOrders[takeOutIndex] === servedOrders[i]) {
      takeOutIndex++;
    } else if (dineInIndex <= dineInMax && dineInOrders[dineInIndex]  === servedOrders[i]) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  if (dineInIndex != dineInOrders.length || takeOutIndex != takeOutOrders.length) {
    return false;
  }
  return true;
}
