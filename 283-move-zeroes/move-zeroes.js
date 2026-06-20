/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroIndex = 0;

    for (let i = 0; i < nums?.length; i++) {
        if (nums[i] === 0) {
            zeroIndex = Math.min(i, zeroIndex);
        } else {
            [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
            zeroIndex++;
        }
    }
};