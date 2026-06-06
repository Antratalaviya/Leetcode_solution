/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let money = new Array(nums?.length).fill(0);

    money[0] = nums[0];
    money[1] = Math.max(nums[1], nums[0]);
    for (let i = 2; i < nums?.length; i++) {
        money[i] = Math.max(money[i - 1], nums[i] + money[i - 2]);
    }

    return money[nums?.length - 1];
};