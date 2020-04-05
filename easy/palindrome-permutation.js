/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    const hashMap = {};
    for (const ch of s) {
        hashMap[ch] = ++hashMap[ch] || 1;
    }
    
    let single = s.length % 2; // odd => true
    for (const k in hashMap) {
        const sum = hashMap[k];
        if (sum % 2 !== 0) {
          if (single) {
              single = false;
          } else {
              return false;
          }
        }
    }
    
    return true;
};