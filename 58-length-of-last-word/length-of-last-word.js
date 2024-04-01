/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    let res = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        res++;
    }
    return res;
};
//44ms 48.37mb
// s = s.trim().split(" ");
// return s[s.length - 1].trim().length;

// 47ms and 48.12mb
 // s = s.trim();
    // let last = "";
    // let c = s.length - 1;
    // while (c > 0 && s[c] !== ' ') {
    //     c--;
    // }
    // for (let i = c; i < s.length; i++) {
    //     if (s[i] !== ' ') {
    //         last = last + s[i];
    //     }
    // }
    // return last.length;