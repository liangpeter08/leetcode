/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// merge search
// merge two sets at a time
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let mergedList = lists;
    while (mergedList.length > 1) {
        let tmp = [];
        for (let i = 0; i < mergedList.length; i += 2) {
            tmp.push(mergeTwoList(mergedList[i], mergedList[i + 1]));
        }
        mergedList = tmp;
    }
    return mergedList[0];
};

const mergeTwoList = function (l1, l2) {
    const retVal = new ListNode(-1);
    let list1 = l1;
    let list2 = l2;
    let curr = retVal;
    while(list1 || list2) {
        const l1Val = list1 ? list1.val : Number.MAX_VALUE;
        const l2Val = list2 ? list2.val : Number.MAX_VALUE;
        if (l1Val < l2Val) {
            curr.next = new ListNode(l1Val);
            if (list1) {
                list1 = list1.next;
            }
        } else {
            curr.next = new ListNode(l2Val);
            if (list2) {
                list2 = list2.next;
            }
        }
        curr = curr.next;

    }
    return retVal.next;
};