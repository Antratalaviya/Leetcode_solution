/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    let ans = [];
    let m = land.length;
    let n = land[0].length;

    function coordinate(row, col) {
        let corr = [row, col];
        let r = row;
        let c = col;

        while (r < m && land[r][col] === 1) r++;
        while (c < n && land[row][c] === 1) c++;

        corr.push(r - 1, c - 1);

        for (let i = row; i < r; i++) {
            for (let j = col; j < c; j++) {
                land[i][j] = 0;
            }
        }
        return corr;
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c] === 1) {
                ans.push(coordinate(r, c));
            }
        }
    }

    return ans;
};