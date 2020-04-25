class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        i = 0
        j = 0
        while j < len(nums):
          if nums[j] != 0:
            nums[i] = nums[j]
            i += 1
          j += 1
        while i < len(nums):
          nums[i] = 0
          i += 1
        """
        Do not return anything, modify nums in-place instead.
        """
        