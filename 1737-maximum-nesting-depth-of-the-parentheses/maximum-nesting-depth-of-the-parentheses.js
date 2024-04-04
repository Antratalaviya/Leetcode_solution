/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let max = 0;
    let temp = 0
    for (let char of s) {
        if (char === '(') {
            temp += 1;
        }
        if (char === ')') {
            temp -= 1
        }
        if(temp>=max){
            max = temp
        }
    }
    return max;
};