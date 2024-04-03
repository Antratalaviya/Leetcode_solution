/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (explore(i, j, board, word, 0)) {
                return true
            }
        }
    }
    return false
};

function explore(i, j, board, word, p) {
    if (p === word.length) return true;
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== word[p]) return false;

    let temp = board[i][j];
    board[i][j] = ''
    let result = explore(i + 1, j, board, word, p + 1) ||
        explore(i - 1, j, board, word, p + 1) ||
        explore(i, j + 1, board, word, p + 1) ||
        explore(i, j - 1, board, word, p + 1);
    board[i][j] = temp;
    return result;
}