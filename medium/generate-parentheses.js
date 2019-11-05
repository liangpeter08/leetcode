// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var solution = [];
    helper("", n, n, solution);
    return solution;
};

var helper = function(state, open, close, solution) {
    if (open === 0 && close === 0) {
        solution.push(state);
    }
    
    if(open > 0) {
        helper(state + '(', open - 1, close , solution);
    }
    if(close > 0 && close > open) {
        helper(state + ')', open, close - 1, solution);
    }
};