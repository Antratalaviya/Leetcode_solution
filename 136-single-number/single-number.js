/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let xor = 0;
    let i = 0;
    while (i < nums?.length) {
        xor ^= nums[i];
        i++;
    }
    return xor;
};