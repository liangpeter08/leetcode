// didn't get it, looked at solution
// counting method was confusing
var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0;
    let j = 0;
    let runningProd = 1;
    let retVal = 0;
    while (j < nums.length && i <= j) {
        runningProd *= nums[j];
        while (runningProd >= k) {
            runningProd /= nums[i];
            ++i;
        }
        if (j >= i) {
            retVal += j - i + 1;
        }
        ++j;    
    }
    
    return retVal;
    
};


var numSubarrayProductLessThanK = function(nums, k) {
    let i = 0;
    let j = 0;
    let runningProd = 1;
    let retVal = 0;
    while (j < nums.length && i <= j) {
        runningProd *= nums[j];
        ++j; 
        retVal += j - i;
        while (runningProd >= k) {
            runningProd /= nums[i];
            --retVal;
            ++i;
        }
 
    }
    return Math.max(retVal, 0);  
};