/**
 * @param {number} n
 * @return {string[][]}
 */
const isSafe = (row, col, board, n) => {
    // same row
    for (let j = 0; j < col; j++) {
        if (board[row][j] === 'Q') return false;
    }

    // upper-left
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
    }

    //lower-left
    for (let i = row, j = col; i < n && j >= 0; i++, j--) {
        if (board[i][j] === 'Q') return false;
    }
    return true;
}
const solve = (col, ans, board, n) => {
    if (col === n) {
        const temp = board.map((row) => row?.join(""));
        ans.push(temp);
        return;
    }

    for (let row = 0; row < n; row++) {
        if (isSafe(row, col, board, n)) {
            board[row][col] = 'Q';
            solve(col + 1, ans, board, n);
            board[row][col] = ".";
        }
    }
}
var solveNQueens = function (n) {
    const board = Array.from({ length: n }, () => Array(n).fill("."));
    const ans = [];
    solve(0, ans, board, n);
    return ans;
};