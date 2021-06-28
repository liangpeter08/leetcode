class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        res = [0] * (2 * n)
        for i in range(n):
            res[i * 2] = nums[i]
            res[i*2 + 1] =  nums[i + n]
        return res