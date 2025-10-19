/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let closing = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for (let char of s) {
        if (char === '(' || char === '{' || char === "[") {
            stack.push(char);
        } else {
            if (closing[stack[stack.length - 1]] === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};