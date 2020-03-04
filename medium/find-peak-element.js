/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    while (i + 1 < j) {
        const mid = parseInt((i + j) / 2);
        console.log(i + ' ' + j + '  ' + mid); 
        if (nums[i] <nums[mid] && nums[mid] > nums[j]){
            console.log('hit');
            return findMid(i, j, nums);
        } else if (nums[mid] > nums[i]) {
            i = mid;
        } else {
            j = mid;
        }  
    }
    if (nums[i] > nums[j]) {
        return i;
    } else {
        return j;
    }
};

const findMid = (i, j, nums) => {
    console.log(i, j);
    if (i + 1 >= j) {
        return null;
    }
    const mid = parseInt((i + j) / 2);
    if (nums[i] <nums[mid] && nums[mid] > nums[j]){
        if (i + 1 === mid && j - 1 === mid) {
            return mid;
        } else {
            console.log('left');
            const left = findMid(i, parseInt((mid + j) /2), nums);
            console.log('right');
            const right = findMid(parseInt((i + 1 + mid)/ 2), j, nums);
            return left || right;
        }
    }
    return null;
};