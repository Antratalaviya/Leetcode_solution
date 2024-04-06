/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let length = 0;
    let index = [];
    index.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            index.push(i);
        } else {
            index.pop();
            if (index.length > 0) {
                length = Math.max(length, i - index[index.length - 1]);
            } else {
                index.push(i);
            }
        }
    }
    return length
};