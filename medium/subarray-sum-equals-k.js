/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// using hashset to calculate continuous sum 
// then check if sum is k or k - sum = value in hashset
var subarraySum = function(nums, k) {
    const hashMap = {0: 1};
    let sum = 0;
    let count = 0;
    for (const val of nums) {
      sum += val;
      if (hashMap[(sum - k)]) {
        count += hashMap[sum - k];
      }
        
      hashMap[sum] = ++hashMap[sum] || 1;
    }
    // console.log(hashMap);
    return count;
  };