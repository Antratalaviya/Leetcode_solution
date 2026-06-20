/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    cost = cost.sort((a, b) => b - a);
    const n = cost?.length;
    let i = 0;
    let minCost = 0;

    for (let i = 0; i < n; i++) {
        if (((i + 1) % 3) === 0) continue;
        minCost += cost[i];
    }

    return minCost;
};