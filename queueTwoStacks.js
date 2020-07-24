//  Implement a queue with two stacks; It should have a enqueue and a dequeue and it should be FIFO.

class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack =[];
  }
  
  enqueue(item) {
    this.inStack.push(item)
  }

  dequeue() {
    if (this.outStack.length === 0) {
      //Since the item that we need to dequeue is stuck at the bottom,
      //We want to reverse the order and move the items to the outStack
      while (this.inStack.length > 0) {
        let newInStackItem = this.inStack.pop()
        this.outStack.push(newInStackItem)
      }
      
      //Checks to see if the outStack is still empty
      if(this.outStack.length === 0) {
        throw new Error(`Can't dequeue from empty queue!`)
      }
    }
    //This returns the item that we originally wanted to dequeue from inStack 
    return this.outStack.pop()
  }
}
