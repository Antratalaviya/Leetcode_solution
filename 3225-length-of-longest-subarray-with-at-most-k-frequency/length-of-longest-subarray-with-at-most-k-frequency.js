/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// using sliding window
var maxSubarrayLength = function (nums, k) {
    let length = 0;
    let start = -1;
    let frequency = new Map();
    for (let end = 0; end < nums.length; end++) {
        frequency.set(nums[end], (frequency.get(nums[end]) || 0) + 1);
        while (frequency.get(nums[end]) > k) {
            start++;
            frequency.set(nums[start], frequency.get(nums[start]) - 1);
        }
        length = Math.max(length, end - start);
    }
    return length;
};