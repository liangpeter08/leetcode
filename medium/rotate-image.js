/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// rotate by layer
var rotate = function(matrix) {
    for (let layer = 0;  layer < (matrix.length - 1) / 2; layer++) {
        let begin = layer;
        let end = matrix.length - layer - 1;
        for (let i = begin; i < end; i++) {
            swap(matrix, i, layer);
        }
        
    }
};

const swap = function (matrix, i, layer) {
    let last = matrix.length - 1;
    let top = matrix[layer][i];
    // let right = matrix[i][last - layer];
    // let bottom = matrix[last - layer][i];
    // let left = matrix[i][layer];
    
    // top = left
    matrix[layer][i] = matrix[last - i][layer];
    
    // left = bottom
    matrix[last - i][layer] = matrix[last - layer][last - i];
    
    // bottom = right
    matrix[last - layer][last - i] =  matrix[i][last - layer];
        
    // right = top
    matrix[i][last - layer] = top;
};