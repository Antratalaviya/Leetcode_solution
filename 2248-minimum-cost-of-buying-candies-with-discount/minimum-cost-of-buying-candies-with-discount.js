/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    const n = cost?.length;
    const costBag = new Array(101).fill(0);

    for (let c of cost) {
        costBag[c]++;
    }

    let minCost = 0;
    let purchased = 0
    for (let i = 100; i >= 1; i--) {
        while (costBag[i] > 0) {
            if (purchased === 2) {
                purchased = 0;
            } else {
                minCost += i;
                purchased++;
            }

            costBag[i]--;
        }
    }

    return minCost;
};