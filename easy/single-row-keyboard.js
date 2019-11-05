// https://leetcode.com/problems/single-row-keyboard/

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    const wordArr = word.split('');
    let index = 0;
    let total = 0;
    for (var i = 0; i < wordArr.length; ++i) {
        const tempIndex = keyboard.indexOf(wordArr[i]);
        total += Math.abs(tempIndex - index);
        index = tempIndex;
    }
    return total;
};