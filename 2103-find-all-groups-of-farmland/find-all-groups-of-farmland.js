/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let ans = [];
    let m = land.length;
    let n = land[0].length;

    let bottomRow = 0;
    let bottomCol = 0;

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n || land[i][j] === 0) return;

        land[i][j] = 0;

        if (i > bottomRow) bottomRow = i;
        if (j > bottomCol) bottomCol = j;

        dfs(i + 1, j);
        dfs(i, j + 1);
        return;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c] === 1) {
                dfs(r, c);
                ans.push([r, c, bottomRow, bottomCol]);
                bottomRow = 0;
                bottomCol = 0;
            }
        }
    }

    return ans;
};