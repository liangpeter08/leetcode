/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

// best solution is to use heap
// this will yield O(n + klogk)
var topKFrequent = function(words, k) {
    const dict = {};
    for (const word of words) {
        if (word in dict) {
            ++dict[word];
        } else {
            dict[word] = 1;
        }
    }
    const retVal= Object.keys(dict).sort((a, b) => {
        if (dict[a] === dict[b]) {
            // z > a true
            return a > b ? 1 : -1;
        }
        return dict[a] < dict[b] ? 1 : -1;
    });
    return retVal.slice(0, k);
};