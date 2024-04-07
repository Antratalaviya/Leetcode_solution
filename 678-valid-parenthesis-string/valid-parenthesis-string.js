/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let char of s) {
        leftMax += char === ')' ? -1 : 1;
        if (leftMax < 0) return false;

        leftMin += char === '(' ? 1 : -1;
        if (leftMin < 0) leftMin = 0;
    }
    return leftMin <= 0;
};