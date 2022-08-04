class Solution:
    def twoSum(self, nums, target):
        op = []
        for i in range(0, len(nums)):
            if((target-nums[i]) in nums[i+1:]):
                op.append(i)
                op.append(nums[i+1:].index(target-nums[i])+(i+1))
                break
        return op