var threeSum = function(nums) {
    const hashMap = {};
    const seenHashMap = new Set();
    const retVal = [];
    for (let i = 0; i < nums.length; i++) {
        hashMap[-nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
           const twosum = nums[i] + nums[j];
           if (twosum in hashMap) {
               const index = hashMap[twosum];
               let order = [nums[i], nums[j], -twosum].sort().join('*');
               if (i !== index && j !== index && !seenHashMap.has(order)) {
                   seenHashMap.add(order);
                   retVal.push([-twosum, nums[i], nums[j]]);
               }
           }
        }
    }
    return retVal;
};

// most optimized, still time limit
var threeSum = function(nums) {
    const hashMap = {};

    const retVal = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[-nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
           const twosum = nums[i] + nums[j];
           if (twosum in hashMap && i !== hashMap[twosum] && j !== hashMap[twosum] ) {
               const order = [-twosum, nums[i], nums[j]].sort().join('*');
               if (!(order in retVal)) {
                  retVal[order] = [-twosum, nums[i], nums[j]];
               }
           }
        }
    }
    return Object.values(retVal);
};


var threeSum = function(nums) {
    const hashMap = {};

    const retVal = {};
    for (let i = 0; i < nums.length; i++) {
        hashMap[-nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
           const twosum = nums[i] + nums[j];
           if (twosum in hashMap && i !== hashMap[twosum] && j !== hashMap[twosum] ) {
               const order = Math.min(-twosum, nums[i], nums[j]) + '*' + Math.max(-twosum, nums[i], nums[j]);
               if (!(order in retVal)) {
                  retVal[order] = [-twosum, nums[i], nums[j]];
               }
           }
        }
    }
    return Object.values(retVal);
};