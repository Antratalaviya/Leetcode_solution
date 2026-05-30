/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    let ans = Array(n).fill(0);

    ans[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j]) {
                ans[j] = 0
            } else {
                if (j > 0) {
                    ans[j] += ans[j - 1]
                }

            }
        }
    }

    return ans[n - 1];
};