class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        xSize = len(grid)
        ySize = len(grid[0])
        costMatrix = [[0 for i in range(ySize)] for i in range(xSize)]
        
        for i in range(xSize):
            for j in range(ySize):
                tempMin = None
                if i - 1 >= 0 and i < xSize:
                    tempMin = costMatrix[i - 1][j]
                if j - 1 >= 0 and j < ySize:
                    if not tempMin or tempMin > costMatrix[i][j - 1]:
                        tempMin = costMatrix[i][j - 1]
                minimumCost = tempMin if tempMin else 0
                costMatrix[i][j] = grid[i][j] + minimumCost
        
        return costMatrix[xSize - 1][ySize - 1]