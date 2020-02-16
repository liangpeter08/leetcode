const findMinMaxWrapper = (nums, target, findMinIndex) => {
    const findMinMax = function (i, j) {
        if (i + 1 >= j) {
            return findMinIndex ?
                nums[i] === target ? i :j : 
                nums[j] === target ? j : i;
        }
        const mid = parseInt((i + j) /2);
        if ((!findMinIndex && nums[mid] === target) || nums[mid] < target) {
            return findMinMax(mid, j);
        } else {
            return findMinMax(i, mid);
        }
    };
    return findMinMax;
};

const searchRange = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let maxIndex = findMinMaxWrapper(nums, target, false)(i, j);
    let minIndex = findMinMaxWrapper(nums, target, true)(i, j);
    return [
        nums[minIndex] === target ? minIndex : -1,
        nums[maxIndex] === target ? maxIndex : -1,
    ];  
};