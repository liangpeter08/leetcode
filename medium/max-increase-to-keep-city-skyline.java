class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        if (grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int[] topView = new int[grid[0].length];
        int[] leftView = new int[grid.length];
        calcMax(topView, leftView, grid);
        
        int total = 0;
        for (int j = 0; j < leftView.length; ++j) {
            for (int i = 0; i < topView.length; ++i) {
                total += Math.min(topView[i], leftView[j]) - grid[j][i];
            }
        }
        return total;
    }
    
    public void calcMax(int[] topView, int[] leftView, int[][] grid) {
        for ( int i = 0; i < grid[0].length; ++i ) {
            topView[i] = 0;

            for (int k = 0; k < grid.length; ++k) {
                if(topView[i] < grid[k][i]) {
                    topView[i] = grid[k][i];
                }
            }
           
        }
        
        for ( int i = 0; i < grid[0].length; ++i ) {
            leftView[i] = 0;
             for (int j = 0; j < grid[i].length; ++j) {
                    if (leftView[i] < grid[i][j]) {
                        leftView[i] = grid[i][j];
                    }
                }
        }
    }
    
    
}