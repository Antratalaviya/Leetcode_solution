/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
//brute-force 
var findKthPositive = function (arr, k) {
    for (let ele of arr) {
        if (ele <= k) {
            k++;
        }
    }
    return k;
};