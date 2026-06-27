/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const canSplit = (nums, size, k) => {
    let count = 1;
    let currSum = 0;

    for (let num of nums) {
        if (currSum + num > size) {
            count++;
            currSum = num;
        } else {
            currSum += num;
        }
        if (count > k) {
            return true;
        }
    }
    return false;
}
var splitArray = function (nums, k) {
    let sum = 0;
    let max = nums[0];

    for (let num of nums) {
        sum += num;
        max = Math.max(max, num);
    }

    let low = max;
    let high = sum;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canSplit(nums, mid, k)) {
            ans = mid
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
};