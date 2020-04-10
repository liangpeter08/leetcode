class Solution(object):
    def merge(self, nums1, m, nums2, n):
        if m == 0:
            nums1[0] = nums2[0]
        p1 = m - 1
        p2 = n - 1
        for i in range(len(nums1) - 1, -1, -1):
            if p2 < 0 or (p1 >= 0 and nums1[p1] > nums2[p2]):
                nums1[i] = nums1[p1]
                p1 = p1 - 1
            else:
                nums1[i] = nums2[p2]
                p2 = p2 - 1