/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    let max = 0;
    
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            if (matrix[r][c] !== '0') {
                dp[r][c] = Math.min(dp[r][c + 1], dp[r + 1][c], dp[r + 1][c + 1]) + 1;
                max = Math.max(max, dp[r][c]);
            }
        }
    }

    return max ** 2;
};