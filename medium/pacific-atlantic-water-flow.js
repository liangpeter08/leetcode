/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// create 2d array for where the pacific can touch (bfs)
// mark the same 2d array by doing bfs
// runtime: O (N + M)
var pacificAtlantic = function(matrix) {
    if(!matrix.length || !matrix[0].length) {
      return [];
    }
    let pacificStack = initStack(matrix, 0, 0); // pacific (x, y)
    const pacificReachable = findReachable(matrix, pacificStack);
    let atlanticStack = initStack(matrix, matrix.length - 1, matrix[0].length - 1); // atlantic
    const atlanticReachable = findReachable(matrix, atlanticStack);
    const retVal = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if(pacificReachable[i][j] && atlanticReachable[i][j]) {
          retVal.push([i, j]);
        }
      }
    }
    return retVal;
  };
  
  const findReachable = function (matrix, stack) {
    const arr = init2dArray(matrix.length, matrix[0].length);
    const increments = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    while (stack.length > 0) {
      const tmp = [];
      for (const item of stack) {
        const [x, y] = item;
        arr[x][y] = 1;
        for (let [xincrement, yincrement] of increments) {
          const newX = x + xincrement;
          const newY = y + yincrement;
          if (newX < matrix.length && newX >= 0 && newY >= 0 && newY < matrix[0].length) {
            if (matrix[newX][newY] >= matrix[x][y] && arr[newX][newY] === 0) {
              tmp.push([newX, newY]);
            }
          }
        }
      }
      stack = tmp;
    }
    return arr;
  }
  
  const initStack = function (matrix, locx, locy) {
    const stack = [];
    for (let i = 0; i < matrix[0].length; i++) {
      stack.push([locx, i]);
    }
    for (let i = 0; i < matrix.length; i++) {
      stack.push([i, locy]);
    }
    return stack;
  };
  
  const init2dArray = function (n, m) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = new Array(m).fill(0);
    }
    return arr;
  };