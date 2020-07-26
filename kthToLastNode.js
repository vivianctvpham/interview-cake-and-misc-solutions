class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, head) {
  if (k < 1) throw new Error("Can't return if k < 1")
  // Return the kth to last node in the linked list
  let listLength = 1;
  let current = head;
  
  while (current.next) {
    current = current.next;
    listLength++
  }
  
  if (k > listLength) throw new Error("Can't be more than the length of list")

  let distance = listLength-k;
  current = head
  for (let i = 0; i < distance; i++) {
    current = current.next
  }
  return current;
}
