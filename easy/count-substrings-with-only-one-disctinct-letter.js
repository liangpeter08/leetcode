/**
 * @param {string} S
 * @return {number}
 */
var countLetters = function(S) {
    const hashMap = generateHash(S);
    let sum = 0;
    // console.log(hashMap);
    for (let prop in hashMap) {
        sum += hashMap[prop];
    }
    return sum;
};


var isUnique = function(S, ai, ak) {
    const first_one = S[ai]; // since k = 1
    for (let i = ai + 1; i + ak <= S.length; ++i) {
        if (S[i] !== first_one) {
            return false;
        }
    }
    return true;
}

var generateHash = function(S) {
    const hashMap = {};
   for (let k = 1; k <= S.length; ++k) { //size
        for (let i = 0; i + k <= S.length; ++i) {
                              // console.log(i + " " +  k + " " + sub);    
            if (!isUnique(S, i, k)) {
                continue;
            }
            const sub = S.substring(i, i + k);
             
            if ( hashMap[sub] == undefined) {
                hashMap[sub] = 1;
            } else {
                hashMap[sub] += 1;
            }
        }
   }
   return hashMap;
};