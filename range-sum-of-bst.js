// https://leetcode.com/problems/range-sum-of-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (root === null || root.val === null) {
       return 0;
   }
   if(root.val >= L && root.val <= R) {
       return root.val + rangeSumBST(root.right, L, R, 0) + rangeSumBST(root.left, L, R, 0);
   }
   return rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R);
};