/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x)

    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false
        }
    }

    return true
};
