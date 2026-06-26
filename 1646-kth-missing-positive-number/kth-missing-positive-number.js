/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
//optimized approach O(log n) 
var findKthPositive = function (arr, k) {
    let low = 0;
    let high = arr?.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] - mid <= k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high + k + 1;
};