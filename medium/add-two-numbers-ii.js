// I think this one is easier with stack than recursion
var addTwoNumbers = function(l1, l2) {
    const twoStack = pushStack(l1, l2);
    return createNewListNode(twoStack);
};

const createNewListNode = function ([stack1, stack2]) {
    let retVal = new ListNode(0);
    while (stack1.length !== 0 || stack2.length !== 0) {
        let total = 0;

        if (stack1.length) {
            total += stack1.pop();
        }
        if (stack2.length) {
            total += stack2.pop();
        }
        total += retVal.val;
        const newNode = new ListNode(parseInt(total / 10));
        newNode.next = retVal;
        retVal.val = total % 10;
        retVal = newNode;
    }
    return retVal.val === 0 ? retVal.next : retVal;
};

const pushStack = function (l1, l2) {
    const twoStack = [[],[]];
    let l1head = l1;
    let l2head = l2;
    while (l1head || l2head) {
        const [l1stack, l2stack] = twoStack;
        if (l1head) {
            l1stack.push(l1head.val);
            l1head = l1head.next;
        }
        if (l2head) {
            l2stack.push(l2head.val);
            l2head = l2head.next;
        }
    }
    return twoStack;
}