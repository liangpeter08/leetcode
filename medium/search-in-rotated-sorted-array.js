// think two traversal would have been alot easier
var search = function(nums, target) {
    if (nums.length <= 2) {
        return nums.findIndex((item) => item === target);
    }
    let i = 0;
    let j = nums.length - 1;
    const last = nums[j];
    const first = nums[0];
    while (i + 1 < j) {
        const mid = parseInt((i + j) / 2);
        console.log(mid);
        if (nums[mid] === target) {
            return mid;
        } 
        
        let isLeft = nums[mid] > last;
        if (isLeft) {
            if (target > nums[mid]) {
                i = mid;
            } else {
                if (target < first) {
                   i = mid;
                } else {
                   j = mid;
                }
            }
        } else {
            if (target < nums[mid]) {
                j = mid;
            } else {
                if (last < target) {
                    j = mid;
                } else {
                    i = mid;
                }
            }
        }
        
    }

    if (nums[i] === target) {
        return i;
    } else if (nums[j] === target) {
        return j;   
    }else {
        return -1;
    }
    
};