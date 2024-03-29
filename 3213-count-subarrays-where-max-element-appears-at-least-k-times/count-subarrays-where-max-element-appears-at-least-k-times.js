/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let maxEle = Math.max(...nums);
    let l = 0;
    let r = 0;
    let ans = 0;

    while (r < nums.length) { 
        k -= nums[r] === maxEle ? 1 : 0;
        r++;
        while (k === 0) {  
            k += nums[l] === maxEle ? 1 : 0;
            l++; 
        }
        ans += l; 
    }

    return ans;
};