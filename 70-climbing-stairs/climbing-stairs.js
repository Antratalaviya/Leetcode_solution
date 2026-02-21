/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    let prevNext = 1;
    let prev = 2;
    let curr = 0;

    for (let i = 3; i <= n; i++) {
        curr = prevNext + prev;
        prevNext = prev;
        prev = curr;
    }
    return curr;
};