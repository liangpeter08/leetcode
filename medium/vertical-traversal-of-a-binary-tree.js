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
// create a object stack with x value, and pointer
var verticalTraversal = function(root) {
    if (!root) {
      return [];
    }
    let stack = [{head: root, x: 0}];
    let retVal = [[]];
    let min = 0; // final retVal offset (negative)
    let tmpStack = [];
    while(stack.length > 0) {
      const {head, x} = stack.shift(); // const [first, ...rest] = stack;
      const {val, left, right} = head;
      retVal[(x - min)].push(val);
      if (left) {
        tmpStack.push({head: left, x: x - 1});
        if (min > x - 1) {
          min = x - 1;
          retVal.unshift([]);
        }      
      }
      
      if (right) {
        tmpStack.push({head: right, x: x + 1});
        if (retVal.length - 1 < x + 1 - min) {
          retVal.push([]);
        }
      }
      
      if (stack.length === 0) {
        tmpStack.sort((a, b) => a.x === b.x ? a.head.val - b.head.val : a.head.val - b.head.val);
        stack = tmpStack;
        tmpStack = [];
      }
    }
  
    return retVal;
  };