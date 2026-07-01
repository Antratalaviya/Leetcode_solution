/**
 * @param {string} s
 * @return {number}
 */
const recursiveFun = (s, i, num, sign) => {
    let INT_MIN = Math.pow(-2, 31);
    let INT_MAX = Math.pow(2, 31) - 1;
    if (i >= s?.length || isNaN(Number(s[i])) || s[i] === " ") {
        return num * sign;
    }

    num = num * 10 + Number(s[i]);

    if (num * sign >= INT_MAX) return INT_MAX;
    if (num * sign <= INT_MIN) return INT_MIN;

    return recursiveFun(s, i + 1, num, sign);

}
var myAtoi = function (s) {
    let num = 0;

    let i = 0;

    while (i < s?.length && s[i] === " ") {
        i++;
    }

    let sign = 1;
    if (i < s?.length && (s[i] === '+' || s[i] === "-")) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    return recursiveFun(s, i, 0, sign);
};