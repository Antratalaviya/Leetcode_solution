/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    return solve(nums, k) - solve(nums, k - 1);
};

function solve(nums, k) {
    if (k === 0) return 0
    let cnt = new Map();
    let l = 0;
    let diff = 0;
    let ans = 0;
    for (let r = 0; r < nums.length; r++) {
        cnt.set(nums[r], (cnt.get(nums[r]) || 0) + 1);
        if (cnt.get(nums[r]) === 1) diff++;

        while (diff > k) {
            cnt.set(nums[l], cnt.get(nums[l]) - 1);
            if (cnt.get(nums[l]) === 0) diff--;
            l++;
        }
        ans += (r - l + 1);
    }
    return ans;
}