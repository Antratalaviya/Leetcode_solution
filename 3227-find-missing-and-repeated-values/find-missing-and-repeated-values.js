/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let nums = grid?.flat();
    let n = grid?.length;
    let max = n * n;
    let count = new Array(max + 1).fill(0);
    let res = [];

    for (let num of nums) {
        count[num]++;
    }

    for (let i = 1; i <= max; i++) {
        if (count[i] === 2) {
            res[0] = i;
        } else if (count[i] === 0) {
            res[1] = i;
        }
    }

    return res;
};