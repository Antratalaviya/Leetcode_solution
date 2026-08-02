/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const atMost = (nums, k) => {
    if (k <= 0) {
        return 0;
    }
    let count = 0; res = 0, l = 0;
    let freq = new Map()
    for (let r = 0; r < nums?.length; r++) {
        freq.set(nums[r], (freq.get(nums[r]) || 0) + 1);
        if (freq.get(nums[r]) === 1) {
            count++;
        }

        while (count > k) {
            freq.set(nums[l], (freq.get(nums[l]) || 0) - 1);
            if (freq.get(nums[l]) === 0) {
                count--;
            }
            l++;
        }

        res += (r - l + 1);
    }
    return res;
}
var subarraysWithKDistinct = function (nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
};