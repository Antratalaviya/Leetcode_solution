/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const indexMap = new Array(256).fill(-1);
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < s.length) {
        if (indexMap[s.charCodeAt(right)] !== -1) {
            left = Math.max(indexMap[s.charCodeAt(right)] + 1, left);
        }
        indexMap[s.charCodeAt(right)] = right;
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};