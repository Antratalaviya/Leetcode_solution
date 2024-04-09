/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    function backtrack(list, close, open) {
        if (close === open && close === n) {
            result.push([...list].join(''));
        }
        if (open < n) {
            list.push('(');
            open++;
            backtrack(list, close, open)
            open--;
            list.pop();
        }
        if (close < open && close < n) {
            list.push(")");
            close++;
            backtrack(list, close, open);
            close--;
            list.pop();
        }
    }
    backtrack([], 0, 0);
    return result;
};