class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {

  // Delete the input node from the linked list
  const nextNode = nodeToDelete.next;
  
  if (nextNode) {
    nodeToDelete.value = nextNode.value
    nodeToDelete.next = nextNode.next
  } else {
    throw new Error('Cant delete')
  }
  
}
