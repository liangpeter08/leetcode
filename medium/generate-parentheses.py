# https://leetcode.com/problems/generate-parentheses/

class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        solution = []
        self.helper('', n, n, solution)
        return solution
    
    def helper(self, state, openP, closeP, solution):
        if openP == 0 and closeP == 0:
            solution.append(state);
        if openP > 0:
            self.helper(state + '(', openP - 1, closeP, solution)
        if closeP > 0 and closeP > openP:
            self.helper(state + ')', openP, closeP - 1, solution)