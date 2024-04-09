/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch(nums, target, leftFound) {
    let left = 0;
    let right = nums.length - 1;
    let idx = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            idx = mid;
            if (!leftFound) {
                right = mid - 1;
            } else {
                left = mid + 1
            }
        }
    }
    return idx;
}
var searchRange = function (nums, target) {
    let left = binarySearch(nums, target, false);
    let right = binarySearch(nums, target, true);

    return [left, right]
};