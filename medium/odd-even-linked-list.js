var oddEvenList = function(head) {

    const evenCases = new ListNode(-1);
    let jump1 = evenCases;
    let retVal = head;
    let curr = head;
    while (curr !== null) {
        curr = curr.next;
        if (curr === null) {
            break;
        } else {
            jump1.next = curr;
            jump1 = jump1.next;
            curr = curr.next;
            retVal.next = curr;
            retVal = retVal.next;
        }
    }
    jump1.next = null;
    if (evenCases.next) { 
        retVal.next = evenCases.next;
    }
    return head;
};