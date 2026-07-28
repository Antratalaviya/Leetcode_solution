/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const atMost = (nums, k) => {
    if (k < 0) return 0;
    let l = 0, count = 0, res = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 !== 0) {
            count++;
        }

        while (count > k) {
            if (nums[l] % 2 !== 0) {
                count--;
            }
            l++;
        }
        res += (r - l + 1);
    }
    return res;
}
var numberOfSubarrays = function (nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
};