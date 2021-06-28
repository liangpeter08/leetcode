class Solution:
    def reconstructMatrix(self, upper: int, lower: int, colsum: List[int]) -> List[List[int]]:
        # base-case
        if (upper + lower != sum(colsum)):
            return []
        
        number2s = list(filter(lambda x: x == 2, colsum))

        upperCounter = upper - len(number2s)
        lowerCounter = lower - len(number2s)
        
        matrix = [[1 if val == 2 else 0 for val in colsum] for i in range(2)]
        
        # greedy solution
        for i, val in enumerate(colsum):
            if (val == 1):
                if (upperCounter > 0):
                    upperCounter -= 1
                    matrix[0][i] = 1
                else:
                    lowerCounter -= 1
                    matrix[1][i] = 1
                    
        if (upperCounter != 0 | lowerCounter != 0):
            return []
        return matrix