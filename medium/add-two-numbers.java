/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return sumTwoNumber(l1, l2, 0);
    }
    
    public ListNode sumTwoNumber(ListNode l1, ListNode l2, int carry) {
        if (l1 == null && l2 == null && carry == 0) {
            return null;
        }
        int total = 0;
        if (l1 != null) {
            total += l1.val;
        }
        if (l2 != null) {
            total += l2.val;
        }
        total += carry;
        ListNode val = new ListNode((total) % 10);
        val.next = sumTwoNumber(l1 != null ? l1.next : null, l2 != null ? l2.next : null, total / 10);
        return val;
        
    }
}