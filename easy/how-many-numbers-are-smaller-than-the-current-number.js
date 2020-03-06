// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function(nums) {
    var hashMap = {};
    [...nums].sort((a, b) => (a - b)).forEach((num, i) => {
       if (hashMap[num] === undefined) {
          hashMap[num] = i; 
       }
    });
    return nums.map((val) => hashMap[val]);
};