/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numSet = new Set(nums);
    let length = 0;

    for (let num of numSet.keys()) {
        if (!numSet.has(num - 1)) {
            let end = num + 1;
            while (numSet.has(end)) {
                end += 1
            }
            length = Math.max(length, end - num);
        }
    }

    return length
};