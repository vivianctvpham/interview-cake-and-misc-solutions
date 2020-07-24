/**
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0)
    let currentHead = list;
    //Hold the sum of the nodes
    let sum = 0;
    //Hold the value that needs to be carried over to the next node
    let carry = 0
    
   while (l1 !== null || l2 !== null) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    currentHead.next = new ListNode(sum % 10);
    currentHead = currentHead.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
    
  if (carry) currentHead.next = new ListNode(carry);
    
    return list.next
    
};
