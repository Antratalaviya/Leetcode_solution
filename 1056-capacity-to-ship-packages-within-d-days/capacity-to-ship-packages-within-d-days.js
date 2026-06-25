/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const countDays = (weights, capacity) => {
    let dayCount = 1;
    let currWeight = 0;
    for (let weight of weights) {
        if (currWeight + weight > capacity) {
            dayCount++;
            currWeight = weight;
        } else {
            currWeight += weight;
        }
    }
    return dayCount;
}
var shipWithinDays = function (weights, days) {
    let max = weights[0];
    let totalWeight = 0;
    for (let weight of weights) {
        max = Math.max(max, weight);
        totalWeight += weight;
    }

    let low = max;
    let high = totalWeight;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        const daysCanShip = countDays(weights, mid);
        if (daysCanShip <= days) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};