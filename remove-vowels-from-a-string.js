// https://leetcode.com/problems/remove-vowels-from-a-string/

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return S.split('').filter((letter) => !vowels.includes(letter)).join('');
};