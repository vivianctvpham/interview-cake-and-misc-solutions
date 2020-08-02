// Write a function containsCycle() that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

function containsCycle(firstNode) {

  // Check if the linked list contains a cycle
  let slowRunner = firstNode;
  let fastRunner = firstNode;
  
  //While fastRunner and the next node still exists 
  // Update the runners, slow by one and fast by two until we hit the end
  // If its singly-linked, fastRunner will reach the end first and break out 
  // of the loop
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next
    
    //This is the case check, if at any time during the loop,
    //the fastRunner and slowRunner equal or "lap" each other, we have a cycle;
    if (fastRunner === slowRunner) {
      return true;
    }
  }

  return false;
}
