/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let close = 0;
    let open = 0;
    let flag = 0;
    for (let char of s) {
        if (char === "(") {
            open++;
            flag++;
        }
        if (char === ')' && flag > 0) {
            close++;
            flag--;
        }
    }
    let k = Math.min(open, close);
    let ans = '';
    open = k;
    close = k;
    for (let char of s) {
        if (char === '(') {
            if (open > 0) {
                ans += char;
                open--;
            }
            continue;
        }
        if (char === ')') {
            if (close > 0 && close > open) {
                ans += char
                close--;
            }
            continue;
        }
        ans += char;
    }
    return ans;
};