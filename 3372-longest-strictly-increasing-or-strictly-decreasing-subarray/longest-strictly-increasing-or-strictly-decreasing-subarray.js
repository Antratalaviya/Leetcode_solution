/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let inc = 1; 
    let dec = 1;
    let max = 1; 
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            inc = dec = 1;
            continue;
        }
        else if (nums[i] > nums[i + 1]) {
            dec++;
            inc=1;
        } else {
            dec=1;
            inc++;
        }
        max = Math.max(max, inc, dec);
    }
    return max
};