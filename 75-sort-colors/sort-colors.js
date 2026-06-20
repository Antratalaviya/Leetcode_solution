/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// dutch-national flag algorithm 

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

var sortColors = function (nums) {
    let left = 0;
    let mid = 0;
    let right = nums?.length - 1;

    while (left <= right && mid <= right) {
        if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 0) {
            swap(nums, left, mid);
            left++;
            mid++;
        } else if (nums[mid] === 2) {
            swap(nums, right, mid);
            right--;
        }
    }
};