/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let map = {};
    let setVal = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            if (map[s[i]] !== t[i]) return false;
        } else {
            if (setVal.has(t[i])) return false;
            map[s[i]] = t[i];
            setVal.add(t[i]);
        }
    }
    return true;
};