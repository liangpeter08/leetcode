/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (nums[i] in hashMap) {
            return [hashMap[nums[i]], i];
        } else {
            hashMap[complement] = i;
        }
    }
};