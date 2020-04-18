// using recursion
var permute = function(nums) {
    const retVal = [];
    recurse(nums, 0, retVal);
    return retVal;
};

const recurse = function (nums, i, retVal) {
    if (nums.length === i + 1) {
        retVal.push(nums);
    }
    
    for (let j = i; j < nums.length; j++) {
        const swapped = swap(nums, i, j)
        recurse(swapped, i + 1, retVal);
    }
}

const swap = function (nums, i, j) {
    if (i === j) {
        return [...nums];
    } else {
        const dup = [...nums];
        dup[i] = dup[j];
        dup[j] = nums[i];
        return dup;
    }
};