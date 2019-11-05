/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let queue = [root];
    let retVal = [];
    zigzagHelper(queue, retVal, true);
    return retVal;
};


var zigzagHelper = function(queue, retVal, leftToRight) {
    var currLevel = [];
    var newQueue = [];
    var i = leftToRight ? 0 : queue.length - 1;
    
    console.log(queue);
    console.log(leftToRight)
    while(i < queue.length && i >= 0) {
        if(queue[i] !== null) {
            const curr = queue[i];
            currLevel.push(curr.val);
        }
        
        leftToRight ? ++i : --i;
    }
    
    for (let i = 0; i < queue.length; i++) {
            if(queue[i] === null) continue;
        const curr = queue[i];
       curr.left && newQueue.push(curr.left);
        curr.right && newQueue.push(curr.right);
    }   
    
    currLevel.length > 0 && retVal.push(currLevel);
    
    if(newQueue.length > 0) {
        zigzagHelper(newQueue, retVal, !leftToRight)
    }
};