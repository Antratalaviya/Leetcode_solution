/**
 * @param {string} s
 * @return {number}
 */

const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const subtractConfig = {
    V: 'I',
    X: 'I',
    L: 'X',
    C: 'X',
    D: 'C',
    M: 'C',
}

var romanToInt = function(s) {
    let total = 0

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && subtractConfig[s[i]] === s[i - 1]) {
            total += romanValues[s[i]] - 2 * romanValues[s[i - 1]]
        } else {
            total += romanValues[s[i]]
        }
    }

    return total
};
