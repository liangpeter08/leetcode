/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) { 
        ListNode * retVal = new ListNode(0);
        ListNode * frontRet = retVal;
        ListNode * frontl1 = l1;
        ListNode * frontl2 = l2;
        while(frontl1 != NULL || frontl2 != NULL){
            int a = frontl1 == NULL ? 0 : frontl1->val;
            int b = frontl2 == NULL ? 0 : frontl2->val;
            int result = a + b + (frontRet->next == NULL ? 0 : frontRet->next->val);
            int val = result % 10;
            int gain = result / 10;
            frontRet->next = new ListNode(val);
           // std::cout << retVal->next->val;
            if(gain == 1){
                frontRet->next->next = new ListNode(gain);
            }
            frontRet = frontRet->next;
            frontl1 = frontl1 == NULL ? frontl1 : frontl1->next;
            frontl2 = frontl2 == NULL ? frontl2 : frontl2->next;
        }
        
        return retVal->next;
    }
};