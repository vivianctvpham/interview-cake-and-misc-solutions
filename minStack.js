/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
*/


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let min = this.stack.length === 0 ? x : this.stack[this.stack.length -1].min
    this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
      this.stack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   if (this.stack.length > 0) {
      return this.stack[this.stack.length -1].val
   }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
      return this.stack[this.stack.length -1].min
  }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
