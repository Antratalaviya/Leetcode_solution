/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let m = matrix?.length;
    let n = matrix[0]?.length;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][m - j - 1]] = [matrix[i][m - j - 1], matrix[i][j]];
        }
    }
};