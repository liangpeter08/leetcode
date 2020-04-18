/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in hashMap) {
            return [hashMap[complement], i];
        } else {
            hashMap[nums[i]] = i;
        }
    }
};