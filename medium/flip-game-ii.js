// just brute force dfs with backtracking
// perhaps more efficient to do dynamic programming

/**
 * @param {string} s
 * @return {boolean}
 */
var canWin = function(s) {
    return helperFn(s, true);
};

var helperFn = function(currS, startPlayerTurn) {
    const queue = [];
    for (var i = 0; i + 1 < currS.length; ++i) {
        if (currS.substring(i, i+2) === '++') {
            queue.push(currS.substring(0, i) + '--' + currS.substring(i+2));
        }
    }
    
    if (queue.length === 0) {
        return !startPlayerTurn;
    }
    
    const result = [];
    for(var i = 0; i < queue.length; i++) {
        result.push(helperFn(queue[i], !startPlayerTurn))
    }
    if (startPlayerTurn) {
        const reducer = (ac, curr) => ac || curr;
        return result.reduce(reducer);
    } else {
        const reducer = (ac, curr) => ac && curr;
        return result.reduce(reducer);
    }
};