//Given a linked list and a val, remove all elements from a linked list of integers that have value val.


var removeElements = function(head, val) {

    let prevNode = null;
    let current = head;
    
    while (current !== null) {
        //If it matches the given val and its the head
        //You want to change the pointer of the current head to the next node
        if (current.val === val && prevNode === null) {
            head = current.next
            
        //If it matches and the the node is somewhere in the list
        //Change the prevNode to skip over the node to the next
        } else if (current.val === val && prevNode !== null) {
            prevNode.next = current.next
        } else {
        
        //Update the prevNode
            prevNode = current;
        }
        //Update current to iterate through
        current = current.next
    }
    
    return head;
};
