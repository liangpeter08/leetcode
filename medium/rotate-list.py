# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: ListNode, k: int) -> ListNode:
        if (head is None):
            return None
        
        stack = []
        currHead = head
        while(currHead is not None):
            stack.append(currHead)
            currHead = currHead.next
        rotateVal = k % len(stack)
        
        
        currHead = head
        for k in range(rotateVal):
            pointer = stack.pop()
            pointer.next = currHead
            currHead = pointer
        
        # remove circular
        pointer = stack.pop()
        pointer.next = None
        
        return currHead
        