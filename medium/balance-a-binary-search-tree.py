# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class Solution:
    def createOrder(self, root: TreeNode) -> List:
        stack = deque()
        curr = root
        res = []
        while (len(stack) > 0 or curr):
            if (curr):
                stack.append(curr)
                curr = curr.left
            else:
                curr = stack.pop()
                res.append(curr.val)
                curr = curr.right
                
        return res
    
    def buildTree(self, orderedList: List):
        if not orderedList:
            return None
        
        middle = len(orderedList) // 2
        newTreeNode = TreeNode(orderedList[middle],
                               self.buildTree(orderedList[:middle]),
                               self.buildTree(orderedList[middle+1:]))
        return newTreeNode
    
    def balanceBST(self, root: TreeNode) -> TreeNode:
        preOrderList = self.createOrder(root)
        return self.buildTree(preOrderList)
