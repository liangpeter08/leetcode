class Solution:
    def longestCommonPrefix(self, strs):
        if len(strs) == 0: return ''
        ans = strs[0]
        for str in strs[1:]:
            substr = len(ans)
            for k in range(len(ans) - 1, -1, -1):
                if k >= len(str):
                    substr = len(str)
                    k = substr
                elif ans[k] != str[k]:
                    substr = k
            ans = ans[0:substr]
        return ans