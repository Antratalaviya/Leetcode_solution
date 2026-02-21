/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    let prev = Array(n).fill(1);
    let curr = Array(n).fill(1);

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            curr[j] = prev[j] + curr[j - 1];
        }
        prev = curr;
        curr = Array(n).fill(1);
    }
    return prev[n - 1];
};