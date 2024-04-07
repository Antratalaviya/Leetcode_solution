/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let cnt = 0;
    for (let num of nums) {
        if (countDigit(num) % 2 === 0) {
            cnt++
        }
    }
    return cnt;
};

function countDigit(num) {
    let sum = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        sum++;
    }
    return sum
}