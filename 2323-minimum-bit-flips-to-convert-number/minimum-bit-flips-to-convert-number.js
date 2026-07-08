/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let setBits = start ^ goal;
    let count = 0;

    while (setBits) {
        //clear right most LSB
        count += setBits & 1;
        setBits >>= 1;
    }
    return count;
};