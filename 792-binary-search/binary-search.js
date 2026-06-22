/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const binarySearch = (left, right) => {
        if (left > right) return -1;
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearch(mid + 1, right);
        } else if (nums[mid] > target) {
            return binarySearch(left, mid - 1);
        } else {
            return -1;
        }
    }
    return binarySearch(0, nums.length - 1);
};