/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let newStack = [];
    const visited = new Array(board.length);
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(board[i].length).fill(false);   
    }
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0]) {
                newStack.push([i, j]);
            }
        }
    }
    if (newStack.length === 0) return false;
    
    let stack = [];
    let tmp = [];
    let visitedTmp = [];
    for (const [rx,ry] of newStack) {
        stack.push([rx, ry]);
        let counter = 1;
        while (counter < word.length && stack.length > 0) {
            const [oldX, oldY] = stack.pop();
            visitedTmp.push([oldX, oldY]);
            const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            for (const [x,y] of directions) {
                const newX = oldX + x;
                const newY = oldY + y;
                if (newX < 0 || newX > board.length - 1) {
                    continue;
                }

                if (newY < 0 || newY > board[newX].length - 1) {
                    continue;
                }

                if (board[newX][newY] === word[counter] && !visited[newX][newY]) {

                    tmp.push([newX, newY]);
                }
            }

            if (stack.length === 0 && tmp.length > 0) {
                stack = tmp;
                for (const [x,y] of visitedTmp) {
                    visited[x][y] = true;
                }
                visitedTmp = [];
                ++counter;
                tmp = [];
            } 
        }
        console.log(counter);
        if (counter === word.length) {
            return true;
        } else {
            stack = [];
            tmp = [];
            for (let i = 0; i < visited.length; i++) {
                visited[i] = new Array(board[i].length).fill(false);   
            }
            counter = 1;
        }
    }

    return false;
    
};