# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        aPointer = head
        bPointer = head
        prev = None
        for i in range(n):
            if not bPointer:
                return []
            bPointer = bPointer.next
        
        while (bPointer):
            bPointer = bPointer.next
            prev = aPointer
            aPointer = aPointer.next
        
        # if head is removed
        if not prev:
            return aPointer.next
        
        prev.next = aPointer.next
        return head
        