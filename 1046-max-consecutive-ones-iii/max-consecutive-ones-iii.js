/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let l = 0, zeroCount = 0, max = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            zeroCount++;
        }
        if (zeroCount > k) {
            if (nums[l] === 0) {
                zeroCount--;
            }
            l++
        }
        max = Math.max(max, r - l + 1);
    }
    return max;
};

/**
Initialize two pointer l, r == 0;
zeroCunt = 0 variable to store no of zero encountered in window.
interate through array and expand the right boundary of window.
if zeroCount exceed the k then shrink window by moving left until zeroCount becomes valid.
calculate length of window at each step. 
 */