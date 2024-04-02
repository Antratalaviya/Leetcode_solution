/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let map = {};
    let setVal = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] !== setVal[t[i]]) {
            return false;
        } else {
            map[s[i]] = i;
            setVal[t[i]] = i;
        }
    }
    return true;
};