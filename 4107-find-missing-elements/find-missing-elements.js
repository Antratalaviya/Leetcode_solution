/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let max = 1;
    let min = 100;
    let res = [];

    const numSet = new Set(nums);

    for (let num of nums) {
        max = Math.max(max, num);
        min = Math.min(min, num);
    }

    for (let i = min; i <= max; i++) {
        if (!numSet.has(i)) {
            res.push(i);
        }
    }

    return res;
};