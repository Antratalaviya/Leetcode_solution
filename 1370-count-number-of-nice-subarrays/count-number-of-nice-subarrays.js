/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    const freq = new Map();
    let count = 0, res = 0;

    freq.set(0, 1);

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] % 2 !== 0) {
            count++;
        }

        if (freq.has(count - k)) {
            res += freq.get(count - k);
        }
        freq.set(count, (freq.get(count) || 0) + 1);
    }
    return res;
};