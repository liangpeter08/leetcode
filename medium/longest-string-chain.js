/**
 * @param {string[]} words
 * @return {number}
 */

 // took 1hour and half
// sort them onto levels
// memoize the value to get the max chain prior
var longestStrChain = function(words) {
    const possibleRoots = [];
    const hashMap = {};
    for (const word of words) {
        hashMap[word] = 1;
        const wordLength = word.length -1;
        if (possibleRoots[wordLength]) {
            possibleRoots[wordLength].push(word);
        } else {
            possibleRoots[wordLength] = [word];
        }
    }
    for (let i = 1; i < possibleRoots.length; i++) {
        if (!possibleRoots[i] || !possibleRoots[i - 1]) continue;
        for (const element of possibleRoots[i]) {
            for (const priorString of possibleRoots[i - 1]) {
                if (isPredecessor(priorString, element)) {
                    hashMap[element] = Math.max(hashMap[priorString] + 1, hashMap[element]);
                }
            }
        }
    }
    let maxVal = 0;
    for (const k in hashMap) {
        if(hashMap[k] > maxVal) {
            maxVal = hashMap[k];
        }
    }
    return maxVal;
    
};


// word1 is always shorter than word2
const isPredecessor = function (word1, word2) {
    let offset = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i + offset]) {
            ++offset;
            --i;
        }
        if (offset > 1) {
            return false;
        }
    }
    return true;
};