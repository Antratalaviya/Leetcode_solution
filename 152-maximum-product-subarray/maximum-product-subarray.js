/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxProd = -10;
    let currProd = 1;

    for (let i = 0; i < nums?.length; i++) {
        currProd *= nums[i];
        maxProd = Math.max(maxProd, currProd);
        if (nums[i] === 0) {
            currProd = 1;
        }
    }

    currProd = 1;
    for (let i = nums?.length - 1; i >= 0; i--) {
        currProd *= nums[i];
        maxProd = Math.max(maxProd, currProd);
        if (nums[i] === 0) {
            currProd = 1;
        }
    }
    return maxProd;
};