/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {
    let length = nums.length;

    let table = new Array(length).fill(0);
    for (let size = 1; size <= length; size++) {
        let upperBound = length - size + 1;
        for (let i = 0; i < upperBound; i++) {
            table[i] |= nums[i + size - 1];
            if (table[i] >= k) {
                return size;
            }
        }
    }
    return -1;
};