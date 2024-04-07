/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let char of s) {
        if (char === '(') {
            leftMax++;
            leftMin++;
        } else if (char === ")") {
            leftMin--;
            leftMax--;
        } else {
            leftMax++;
            leftMin--;
        }
        if (leftMin < 0) leftMin = 0;
        if (leftMax < 0) return false;
    }
    return leftMin === 0;
};