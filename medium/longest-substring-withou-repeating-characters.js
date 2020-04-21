var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;
    const hashMap = new Set();
    hashMap.add(s[0]);
    let ans = 0;
    let i = 0;
    let j = 1;
    let res = 1;
    while(j < s.length) {
       if (!hashMap.has(s[j])) {
           hashMap.add(s[j]);
           ++j;
       } else {
           hashMap.delete(s[i]);
           ++i;
       }
       if (res < j - i) {
           res = j - i;
       }
    }
    return res; 
};