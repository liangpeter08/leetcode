/**
 * @param {number[][]} grid
 * @return {number}
 */
let orangesRotting = function(grid) {
    let rotting = true;
    let counter = 0;
    const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let stack = []; //{i, j}
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 2) {
                stack.push({i, j});
            }
        }
    }
    
    while (rotting && stack.length !== 0) {
        let old = [...stack];
        stack = [];
        rotting = false;
        for (let rotten of old) {
            let {i, j} = rotten;
            const rotNeighbor = (i, j) => {
                if (grid[i] !== undefined && grid[i][j] !== undefined) {
                    if (grid[i][j] === 1) {
                        stack.push({i, j});
                        grid[i][j] = 2;
                        rotting = true;
                        
                    }
                }
            };
            for (const [iplus, jplus] of neighbors) {
                rotNeighbor(i + iplus, j + jplus);
            }
        }
        if (rotting) {
            ++counter;
        }
    }
    
    
    for (const row of grid) {
        for (const cell of row) {
            if (cell === 1) {
                return -1;
            }
        }
    }
    return counter;  
};