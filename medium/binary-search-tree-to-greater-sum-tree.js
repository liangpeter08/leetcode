/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    var retVal = new TreeNode(0);
    recursePlace(root, retVal, 0);
    return retVal;
};

var recursePlace = function(root, retVal, totalNum) {
    let curr = totalNum;
    if (root.left === null && root.right === null) {
        retVal.val = totalNum + root.val;
        return retVal.val;
    }
    if (root.right !== null) {
        retVal.right = new TreeNode(0);
        curr = recursePlace(root.right, retVal.right, totalNum);
    }
    curr += root.val;
    retVal.val = curr;
    if(root.left !== null) {
        retVal.left = new TreeNode(0);
        curr = recursePlace(root.left, retVal.left, curr)
    }  
    return curr; 
};