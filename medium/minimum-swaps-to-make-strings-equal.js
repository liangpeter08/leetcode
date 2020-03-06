// https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    const hashs1 = {x: 0, y: 0};
    const hashs2 = {x: 0, y: 0};
    
    
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            ++hashs1[s1[i]];
            ++hashs2[s2[i]];
        }
    }
    if ((hashs1.x + hashs1.y) % 2) {
        return -1;
    }
    
    if (hashs1.x === hashs2.y && hashs1.y === hashs2.x) {
        // return (hashs1.x + hashs2.y + hashs1.y + hashs2.x) / 4 + hashs1.x % 2;
        return (hashs1.x + hashs2.y + hashs1.y + hashs2.x) / 4 + hashs1.x % 2;
    }
};
