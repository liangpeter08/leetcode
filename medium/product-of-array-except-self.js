var productExceptSelf = function(nums) {
    let product = 1;
    const retVal = [];
    for (const num of nums) {
        retVal.push(product);
        product *= num;
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        retVal[i] *= product;
        product *= nums[i];
    }
    return retVal;
};