// https://leetcode.com/problems/maximum-subarray/submissions/

var maxSubArray = function(nums) {
    let globalMax = nums[0];
    let prev = 0;
    for (const num of nums) {
        prev = Math.max(prev + num, num);
        globalMax = Math.max(prev, globalMax);
    }
    return globalMax;
};