/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let level = 0;
    let result = '';
    for (let char of s) {
        if (char === '(') {
            if (level > 0) {
                result += char;
            }
            level++;
        }
        if (char === ')') {
            level--;
            if (level > 0) {
                result += char;
            }
        }
    }
    return result;
};