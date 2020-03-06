code // https://leetcode.com/problems/group-anagrams/
// create a hashmap and string the hashmap of the chars as key

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashMap = {};
    for (k of strs) {
        const eachHashMap = {};
        for(c of k) {
           eachHashMap[c] ? ++eachHashMap[c] : eachHashMap[c] = 1;
        }
        let str = '';
        Object.keys(eachHashMap).sort().forEach((key) => {
            str += key + eachHashMap[key];
        });
        hashMap[str] ? hashMap[str].push(k) : hashMap[str] = [k];
    }
    const retVal = [];
    for (k in hashMap) {
        retVal.push(hashMap[k]);
    }
    return retVal;
  };