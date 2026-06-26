/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const canPossible = (position, dist, m) => {
    let count = 1;
    let lastPosition = position[0];

    for (let pos of position) {
        if ((pos - lastPosition) >= dist) {
            count++;
            lastPosition = pos;
        }

        if (count >= m) {
            return true;
        }
    }
    return false;
}
var maxDistance = function (position, m) {
    position = position.sort((a, b) => a - b);

    let low = 1;
    let high = position[position?.length - 1] - position[0];
    let ans = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canPossible(position, mid, m)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};