/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // two value struct
    this.stack = [];
    this.min = Number.MAX_VALUE;
    return this;
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if (this.min > x) {
        this.min = x;
    }
    this.stack.push([x,this.min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    const [val = [_, Number.MAX_VALUE]] =  this.stack.slice(-1);
    this.min = val[1];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.slice(-1)[0][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */