// https://leetcode.com/problems/brick-wall/

var leastBricks = function(wall) {
    const hashmap = {};
    const total = wall.length;
    for (const row of wall) {
        let gap = 0;
        for (let cell = 0; cell < row.length -1; ++cell) {
            gap += row[cell];
            hashmap[gap] = hashmap[gap] || 0;
            hashmap[gap] += 1;
        }
    }
    let largestGap = 0;
    for (const k in hashmap) {
        if (hashmap[k] > largestGap) {
            largestGap = hashmap[k];
        }
    }
    return total - largestGap;
  };