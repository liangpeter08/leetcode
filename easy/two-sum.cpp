class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for(int i = 0; i < nums.size(); i++){
            int match = target - nums[i];
            for(int i2 = i + 1; i2 < nums.size(); i2++){
                if(match == nums[i2]){
                    vector<int> * newVector = new vector<int>;
                    (*newVector).push_back(i);
                    (*newVector).push_back(i2);
                    return *newVector;
                }
            }
        
        }
        return vector<int>();
    }
};