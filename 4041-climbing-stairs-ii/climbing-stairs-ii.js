/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */

const calCost = (cost, sqr) => {
    return cost + sqr;
}

var climbStairs = function (n, costs) {
    if (n === 0) {
        return 0;
    }
    let prevnextnext = calCost(costs[0], 1);
    if (n == 1) {
        return prevnextnext;
    }

    let prevnext = Math.min(calCost(costs[1], 4), prevnextnext + calCost(costs[1], 1));
    if (n == 2) {
        return prevnext;
    }
    let prev = Math.min(calCost(costs[2], 9), prevnext + calCost(costs[2], 1), prevnextnext + calCost(costs[2], 4), prevnext + calCost(costs[2], 1));

    if (n == 3) {
        return prev;
    }

    let curr = 0
    for (let i = 4; i < n + 1; i++) {
        curr = Math.min(prevnextnext + calCost(costs[i - 1], 9), prevnext + calCost(costs[i - 1], 4), prev + calCost(costs[i - 1], 1));
        prevnextnext = prevnext;
        prevnext = prev;
        prev = curr;
    }

    return curr;
};