/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function (nums, k) {
    nums = nums.sort((a, b) => a - b);
    let mid = Math.floor((nums.length) / 2);
    if (nums[mid] === k) {
        return 0;
    } else {
        let op = 0;
        op += Math.abs(k - nums[mid]);
        let i = 0;
        while (i < mid) {
            if (nums[i] > k) op += nums[i] - k;
            i++;
        }
        i = mid + 1;
        while (i < nums.length) {
            if (nums[i] < k) op += k - nums[i];
            i++;
        }
        return op;
    }
};