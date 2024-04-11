/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let s = [num[0]];

    for (let i = 1; i < num.length; ++i) {
        if (k > 0 && s.length && num[i] < s[s.length - 1]) {
            s.pop();
            k--;
            i--;
            continue;
        }
        else {
            s.push(num[i]);
        }
    }

    while (k > 0 && s.length) {
        s.pop();
        k--;
    }
    while (s[0] === '0') {
        s.shift();
    }
    return s.length ? s.join('') : '0';
};