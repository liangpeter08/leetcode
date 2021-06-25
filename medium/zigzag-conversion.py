class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows <= 1:
            return s
        
        
        row_dict = [[] for j in range(numRows)]
        row_counter = 0
        add_val = 1
        
        for i in range(len(s)):
            if row_counter == numRows - 1:
                add_val = -1
            elif row_counter == 0:
                add_val = 1
            row_dict[row_counter].append(s[i])
            row_counter = row_counter + add_val
        return ''.join([''.join(rowArr) for rowArr in row_dict])