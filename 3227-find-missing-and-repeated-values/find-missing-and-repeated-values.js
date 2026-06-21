/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const hashMap = new Map();
    let nums = grid?.flat();
    let res = [];

    for (let num of nums) {
        if (!hashMap.has(num)) {
            hashMap.set(num, 1);
        } else {
            hashMap.set(num, hashMap.get(num) + 1);
        }
    }

    for (let i = 1; i <= grid?.length ** 2; i++) {
        if (hashMap.has(i) && hashMap.get(i) > 1) {
            res[0] = i;
        } else if (!hashMap.has(i)) {
            res[1] = i;
        }
    }

    return res;
};