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



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length <= 2) {
        return nums.findIndex((item) => item === target);
    }
    
  let findPivotIndex = -1;
  let minVal = Number.MAX_VALUE;
  let i = 0;
  let j = nums.length - 1;
  while (i + 1 < j) {
      const mid = parseInt((i + j) / 2);
      if (nums[mid] < minVal) {
          minVal = nums[mid];
          findPivotIndex = mid;
      }
      if (nums[mid] > nums[nums.length -1]) {
          i = mid;
      } else {
          j = mid;
      }
  }
    
  if (nums[i] < minVal) {
      minVal = nums[i];
      findPivotIndex = i;
  }

  if (nums[j] < minVal) {
      minVal = nums[j];
      findPivotIndex = j;
  }
    
  if (findPivotIndex === -1) {
      return -1;
  }

  i = 0;
  j = nums.length - 1;
  while (i + 1 < j) {
    const mid = parseInt((i + j) / 2);
    const modmid = (mid + findPivotIndex) % nums.length;
    if (nums[modmid] === target) {
        return modmid;
    } else if (nums[modmid] < target) {
        i = mid;
    } else {
        j = mid;
    } 
  }

  const modi = (i + findPivotIndex) % nums.length;
  const modj = (j + findPivotIndex) % nums.length;
  if (nums[modi] === target) {
      return modi;
  } else if (nums[modj] === target) {
      return modj;
  } else {
      return -1;
  }
        
};