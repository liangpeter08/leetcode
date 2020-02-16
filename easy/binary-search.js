/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = parseInt(nums.length / 2);
    let prev = nums.length - 1;
    while (i < nums.length && i !== prev) {
        if (nums[i] === target) {
            return i;
        } else if (nums[i] < target) {
            i = parseInt((i + prev) / 2);
        } else {
            prev = i;
            i = parseInt(i / 2);
        }
    }
    return -1;
};