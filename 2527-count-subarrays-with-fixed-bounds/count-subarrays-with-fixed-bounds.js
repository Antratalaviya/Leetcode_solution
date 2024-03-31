/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
    let ans = 0;
    let bad_index = -1;
    let lastMin = -1;
    let lastMax = -1;

    for (let i = 0; i < nums.length; i++) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) {
            bad_index = i;
        }

        if (minK === nums[i]) lastMin = i;
        if (maxK === nums[i]) lastMax = i;

        let bound = Math.min(lastMin, lastMax);
        let tmp = bound - bad_index
        ans += tmp <= 0 ? 0 : tmp;
    }
    return ans;
};