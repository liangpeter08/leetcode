// https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // hashmap
    
    const hm = {};
    for (let i = 0; i < S.length; ++i) {
        if (hm[S[i]]) {
            hm[S[i]] +=  1;
        } else {
            hm[S[i]] = 1;
        }

    }
    
    let total = 0;
    
    for (let j = 0; j < J.length; ++j) {
        if(hm[J[j]]) {
            total += hm[J[j]];
        }
        }
    return total;
};