/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim().split(" ");
    return s[s.length - 1].trim().length;
};

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