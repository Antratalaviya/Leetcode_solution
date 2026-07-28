/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    let freq = new Map();
    let currSum = 0;
    let res = 0;

    freq.set(0, 1);

    for (let r = 0; r < nums.length; r++) {
        currSum += nums[r];

        if (freq.has(currSum - goal)) {
            res += freq.get(currSum - goal);
        }
        freq.set(currSum, (freq.get(currSum) || 0) + 1);
    }
    return res;
};