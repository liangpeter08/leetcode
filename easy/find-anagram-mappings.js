// https://leetcode.com/problems/find-anagram-mappings/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
    const hashMap = {};
    for (let i = 0; i < B.length; ++i) {
        hashMap[B[i]] = i;
    }
    let res = [];
    for (let j = 0; j < A.length; ++j) {
        res.push(hashMap[A[j]]);
    }
    return res;
};