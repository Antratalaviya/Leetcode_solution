/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let str = nums.map((item) => item.toString());

    function compare(a, b) {
        if (Number(a + b) > Number(b + a)) {
            return -1
        } else return 1
    }

    if (str.every(item => item === "0")) return "0"

    return str.sort(compare).join("");
};