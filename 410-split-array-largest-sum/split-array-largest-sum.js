/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const canSplit = (nums, maxSize) => {
    let partitions = 1;
    let subArraySum = 0;

    for (let num of nums) {
        if (subArraySum + num <= maxSize) {
            subArraySum += num;
        } else {
            partitions++;
            subArraySum = num;
        }
    }
    return partitions;
}
var splitArray = function (nums, k) {
    let sum = 0;
    let max = nums[0];

    for (let num of nums) {
        sum += num;
        max = Math.max(max, num)
    }

    let low = max;
    let high = sum;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let partitions = canSplit(nums, mid)
        if (partitions > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};