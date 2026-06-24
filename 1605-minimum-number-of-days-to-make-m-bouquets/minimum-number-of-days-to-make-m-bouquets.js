/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

const possible = (bloomDay, day, m, k) => {
    let count = 0;
    let bouquets = 0;

    for (let i of bloomDay) {
        if (i <= day) {
            count++;
            if (count === k) {
                bouquets++;
                count = 0;
            }
        } else {
            count = 0;
        }
    }

    return bouquets >= m;
}

var minDays = function (bloomDay, m, k) {

    if (m * k > bloomDay?.length) {
        return -1;
    }

    let max = bloomDay[0];
    let min = bloomDay[0];

    for (let day of bloomDay) {
        max = Math.max(max, day);
        min = Math.min(min, day);
    }

    let low = min;
    let high = max;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (possible(bloomDay, mid, m, k)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return result;
};