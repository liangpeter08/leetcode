var mergeTwoLists = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    const head = new ListNode(-1);
    let curr = head;
    while (p1 !== null && p2 !== null) {
        if (p1.val < p2.val) {
            curr.next = new ListNode(p1.val);
            p1 = p1.next;
            curr = curr.next;
        } else {
            curr.next = new ListNode(p2.val);
            p2 = p2.next;
            curr = curr.next;
        }
        
    }

    if (p1 === null) {
        curr.next = p2;
    }else if (p2 === null) {
        curr.next = p1;
    }
    return head.next;
};