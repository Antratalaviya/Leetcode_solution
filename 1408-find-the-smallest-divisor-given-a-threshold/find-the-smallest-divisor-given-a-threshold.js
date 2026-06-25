/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const sumAfterDivision = (nums, divisor) => {
    let sum = 0
    for (let num of nums) {
        sum += Math.ceil(num / divisor);
    }
    return sum;
}
var smallestDivisor = function (nums, threshold) {
    let max = nums[0];
    for (let num of nums) {
        max = Math.max(num, max);
    }

    let low = 1;
    let high = max;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (sumAfterDivision(nums, mid) <= threshold) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};