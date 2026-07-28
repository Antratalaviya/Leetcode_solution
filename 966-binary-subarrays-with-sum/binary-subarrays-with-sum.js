/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const atMost = (nums, k) => {
    if (k < 0) {
        return 0;
    }
    let l = 0; sum = 0; count = 0;
    for (let r = 0; r < nums.length; r++) {
        sum += nums[r];

        while (sum > k) {
            sum -= nums[l];
            l++;
        }
        count += (r - l + 1);
    }
    return count
}
var numSubarraysWithSum = function (nums, goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1)
};