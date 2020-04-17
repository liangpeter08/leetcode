// reasoning, moved the smallest as the it will also yield a better result
// and smaller one can't be one of the edges since it'll yield smaller x, and
// smaller y at current x.
var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let retVal = 0;
    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        if (area > retVal) {
            retVal = area;
        }
        if (height[i] > height[j]) {
            --j;
        } else {
            ++i;
        }
    }
    return retVal;
};