# since there are negative numbers
# currMax might be smaller than max_sum
# since negative isnt added to max_sum
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      max_sum = nums[0]
      currMax = nums[0]
      for num in nums[1:]:a
        currMax = max(currMax + num, num)
        if currMax > max_sum:
          max_sum = currMax
      return max_sum