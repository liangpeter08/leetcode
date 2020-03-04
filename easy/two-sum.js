// https://leetcode.com/problems/two-sum/submissions/

var twoSum = function(nums, target) {
    const hashMap = {};
    for (const i in nums) {
        if (hashMap[nums[i]]) {
            return [hashMap[nums[i]], i];
        }
        hashMap[target - nums[i]] = i;
    }
};
