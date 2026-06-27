/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
const canPossible = (candies, candy, k) => {
    let piles = candies;
    let count = 0;

    for (let pile of piles) {
        let currCount = Math.floor(pile / candy)
        if (currCount > 0) {
            count += currCount;
        }
        if (count >= k) {
            return true;
        }
    }
    return false;
}
var maximumCandies = function (candies, k) {
    let max = candies[0];

    for (let candy of candies) {
        max = Math.max(max, candy);
    }

    let low = 0;
    let high = max;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canPossible(candies, mid, k)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};