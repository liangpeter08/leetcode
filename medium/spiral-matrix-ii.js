/**
 * @param {number} n
 * @return {number[][]}
 */

 // note: .fill fills with same reference unless it's primitive
var generateMatrix = function(n) {
    if (n === 1) {
        return [[1]];
    }
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    let i = 0;
    let j = 0;
    let counter = 1;
    const seq = [[0, 1], [1,0], [0, -1], [-1, 0]];
    let seqCounter = 0;
    while (arr[i][j] === undefined) {
        arr[i][j] = counter;
        counter++;
        const [incrementi, incrementj] = seq[seqCounter];
        i += incrementi;
        j += incrementj;
        if (i === n || i === -1 || j === n || j === -1 || arr[i][j] !== undefined) {
            i -= incrementi;
            j -= incrementj;
            if (seqCounter + 1 === seq.length) {
                seqCounter = 0;
            } else {
                ++seqCounter;
            }
            const [ip, jp] = seq[seqCounter];
            i += ip;
            j += jp;
        }
    }
    return arr;
};