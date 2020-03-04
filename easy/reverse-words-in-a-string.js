/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const k = s.split(/ +/g);
    return k.reverse().join(' ').trim();
};