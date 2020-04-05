var isPalindrome = function(head) {
    if (head === null) {
        return true;
    }
    return recurse(head, head);
};

const recurse = function (head, curr) {
    if (curr.next !== null) {
        const retVal = recurse(head, curr.next);
        if (retVal) {
            head = retVal;
        } else {
            return false;
        }
    } 
    if (curr.val === head.val) {
        head = head.next;
        return head;
    }
    return false;
};