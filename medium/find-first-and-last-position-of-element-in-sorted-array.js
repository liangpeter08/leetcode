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


// atempt 2
const findVal = (nums, target) => {
    const findMinMax = function (i, j) {
        if (i + 1 >= j) {
            return nums.findIndex((num) => num === target);
        }
        const mid = parseInt((i + j) /2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            return findMinMax(mid, j);
        } else {
            return findMinMax(i, mid);
        }
    };
    return findMinMax;
};

const searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    } else if (nums.length === 1) {
        const found = nums[0] === target ? 0 : -1;
        return [found, found];        
    }
    let i = 0;
    let j = nums.length - 1;
    let index = findVal(nums, target)(i, j);
    if (index === -1) {
        return [-1, -1];
    }

    for(i = index; i >= 0; i--) {
        if (nums[i] !== target) {
            break;
        }
    }
    for (j = index; j < nums.length; j++) {
        if (nums[j] !== target) {
            break;
        }
    }

    return [i + 1, j - 1];  
};