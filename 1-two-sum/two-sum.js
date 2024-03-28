/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (hashMap.has(complement) && hashMap.get(complement)!==i) {
            return [i, hashMap.get(complement)]
        }
    }
};