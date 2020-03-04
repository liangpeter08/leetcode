/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// stack
var reverseBetween = function(head, m, n) {
    let depth = 0;
    const stack = [];
    const retVal = new ListNode(-1);
    let end = null;
    const recurse = (head) => {
        ++depth;
        if (!head) {
            return;
        }
        
        if (m > depth) {
           stack.push(head.val);  
           head.next && recurse(head.next);
        } else if (m <= depth && n >= depth) {
            recurse(head.next);
            stack.push(head.val);
        } else {
            end = head;
        }
    };

    recurse(head);
    let start = retVal;
    for (const k of stack) {
        start.next = new ListNode(k);
        start = start.next;

    }
    start.next = end;
    return retVal.next;
};