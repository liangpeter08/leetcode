var removeDuplicates = function(nums) {
    let loc = 1;
    let prev = nums[0];
    for (let j = 1; j < nums.length; j++) {
        if (prev !== nums[j]) {
            nums[loc] = nums[j];
            prev = nums[j];
            ++loc;
        }
    }
    nums.length = loc;
};