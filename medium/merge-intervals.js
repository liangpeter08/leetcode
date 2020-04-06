// runtime: 5.96%
// mem: 7.69%

// not the best solution
var merge = function(intervals) {
    let merged = true;
    let i = 1;
    const sortedInterval = intervals.sort((a, b) => a[0] - b[0]);
    while (merged && i < sortedInterval.length) {
        const [newLow, high] = sortedInterval[i - 1];
        const [low, newHigh] = sortedInterval[i];
        if (high >= low) {
            sortedInterval.splice(i - 1, 2, [newLow, Math.max(newHigh, high)]);
        } else {
            ++i;
        }
    }
    return sortedInterval;
};