/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    let min = Infinity;
    for (let s = 0; s < nums.length; s++) {
        let res = nums[s];
        for (let r = s; r < nums.length; r++) {
            res |= nums[r];
            if (res >= k && min > r - s + 1) {
                min = r - s + 1;
            }
        }
    }
    return min === Infinity ? -1 : min;
};