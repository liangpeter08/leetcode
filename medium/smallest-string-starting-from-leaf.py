# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# since leaf nodes have most weight, this is just brute force
class Solution:
    def smallestFromLeaf(self, root: TreeNode) -> str:
        stackqueue = [(chr(root.val + ord('a')), root)]
        smallest = None
        
        while stackqueue:
            (currStr, nodePointer) = stackqueue.pop()
            if not nodePointer.left and not nodePointer.right:
                if not smallest or smallest > currStr:
                    smallest = currStr
                continue
            
            for node in [nodePointer.left, nodePointer.right]:
                if (node):
                    newStr = (chr(node.val + ord('a'))) + currStr
                    stackqueue.append((newStr, node))
        return smallest