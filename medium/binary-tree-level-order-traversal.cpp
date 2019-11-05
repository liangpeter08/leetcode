// https://leetcode.com/problems/binary-tree-level-order-traversal/

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:

    vector<TreeNode *> nextLevel(vector<TreeNode *> & queue){
        vector<TreeNode *> newQueue;
        for(unsigned int i = 0; i < queue.size(); ++i){
            if(queue[i]->left != NULL){
                newQueue.push_back(queue[i]->left);
            }
            if(queue[i]->right != NULL){
                newQueue.push_back(queue[i]->right);
            }
        }
        return newQueue;
    }
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> retVal;
        vector<TreeNode *> queue;
        if(root == NULL) return retVal;
        queue.push_back(root);

        while(!queue.empty()){
            vector<int> newLevel;
            for(int i = 0; i < queue.size(); ++i){
   
                    newLevel.push_back(queue[i]->val);
            }
            retVal.push_back(newLevel);

            queue = nextLevel(queue);
        }
        return retVal;
    }
};