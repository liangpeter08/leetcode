var addTwoNumbers = function(l1, l2) {
    return recurse(l1, l2, 0);
};

const recurse = function (l1, l2, carry) {
    let total = carry;
   if (l1) {
       total += l1.val;
   }
   if (l2) {
       total += l2.val;
   }
    const newNode = new ListNode(total % 10);
    const extra =  parseInt(total / 10);
    
   if ((l1 && l1.next) || (l2 && l2.next) || extra) {
      newNode.next = recurse(l1 ? l1.next : null, l2 ? l2.next : null, extra);
    }
    return newNode;
};