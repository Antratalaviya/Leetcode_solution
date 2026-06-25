/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const countHours = (piles, k) => {
    let totalHours = 0;
    for (let pile of piles) {
        totalHours += Math.ceil(pile / k)
    }
    return totalHours;
}
var minEatingSpeed = function (piles, h) {
    let max = piles[0];

    for (let pile of piles) {
        max = Math.max(max, pile);
    }

    let low = 1;
    let high = max;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let hour = countHours(piles, mid);

        if (hour <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
};