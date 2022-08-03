import sys
import json
from TestSolution import Solution
class CorrectSolution(object):
    def twoSum(self, nums, target):
        lis =[];
        for i in nums:
            lis.append(target-i)
        res=[]
        if len(nums)==2:
            return [0,1]
        for i in range(len(nums)):
            if nums[i] in lis[i+1:len(nums)]:
                res.append(i)
                res.append(lis[i+1:len(nums)].index(nums[i])+i+1)
                break;
        return res;      
s1 = CorrectSolution()
s2 = Solution()
li=sys.argv[1].split('\n')
arr = json.loads(li[0])
target = int(li[1])
print(s1.twoSum(arr,target))
print(s2.twoSum(arr,target))