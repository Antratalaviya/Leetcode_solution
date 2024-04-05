/**
 * @param {string} s
 * @return {string}
 */

var makeGood = function (s) {
    let stack = [];
    for (let char of s) {
        let peek = stack.length ? stack[stack.length - 1] : null;
        if ((char.toUpperCase() === peek || char.toLowerCase() === peek) && char !== peek) {
            stack.pop();
            continue;
        }
        stack.push(char);
    }
    return stack.join('');
};

    // let i = 0;
    // while (i < s.length - 1) {
    //     if ((s[i] === s[i].toUpperCase() && s[i + 1] === s[i].toLowerCase()) ||
    //         (s[i + 1] === s[i + 1].toUpperCase() && s[i] === s[i + 1].toLowerCase())) {
    //         s = s.slice(0, i) + s.slice(i + 2);
    //         if (i > 0) {
    //             i--;
    //         }
    //         continue;
    //     }
    //     i++;
    // }
    // return s;