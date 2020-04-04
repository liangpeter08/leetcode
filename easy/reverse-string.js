/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const mid = (s.length - 1) / 2; // double
    for (let i = 1; i <= mid + 0.5; i++) {
        const left = parseInt(mid - i + 0.5, 10);
        const right = parseInt(mid + i, 10);
        const tmp = s[left];
        s[left] = s[right];
        s[right] = tmp;
    }
};

var reverseString = function(s) {
    for (let i = 0; i < s.length / 2; i++) {
        const right = s.length - 1 - i;
        const tmp = s[i];
        s[i] = s[right];
        s[right] = tmp;
    }
};