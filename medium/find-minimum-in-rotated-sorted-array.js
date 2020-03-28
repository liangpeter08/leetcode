// O(logn)
var findMin = function(nums) {
    let i = 0;
    let j = nums.length - 2;
    let maxMin = nums.slice(-1);
    while (i <= j) {
        const mid = parseInt((i + j) / 2);
        if (nums[mid] > maxMin) {
            i = mid + 1;
        } else {
            j = mid - 1;
            maxMin = nums[mid];
        }
    }
    return maxMin;
};