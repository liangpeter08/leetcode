/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var visitedEntireIsland = (i, j) => {
        if (grid[i] && grid[i][j] && grid[i][j] === '1') {
            grid[i][j] = '0';
            visitedEntireIsland(i + 1, j);
            visitedEntireIsland(i - 1, j);
            visitedEntireIsland(i, j + 1);
            visitedEntireIsland(i, j - 1);
        }
    };
    
    let islandCount = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                ++islandCount;
                visitedEntireIsland(i , j);
            }
        }
    }
    return islandCount;
};