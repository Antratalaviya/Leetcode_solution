/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let i = 0;  //pointer to string
    let j = 0;  //pointer to pattern
    let sIndex = -1; //index-positon of asterisk "*"
    let pIndex = -1  //temp-index when p==="*"

    while (i < s.length) {
        if (j < p.length && s[i] === p[j] || p[j] === '?') {
            i++; //both pointer moves
            j++;
        }
        else if (j < p.length && p[j] === "*") {
            sIndex = i;
            pIndex = j;
            j++;    //only pattern pointer moves when p[j]==="*"
        }
        else if (pIndex === -1) return false;
        else {
            j = pIndex + 1;
            i = sIndex + 1;  //only string pointer moves when s[i]!==p[j]
            sIndex = i;
        }
    }
    //if pattern still remaining with "*" it is valid as it matches empty also
    for (let i = j; i < p.length; i++) {
        if (p[i] !== "*") return false;
    }
    return true;
};