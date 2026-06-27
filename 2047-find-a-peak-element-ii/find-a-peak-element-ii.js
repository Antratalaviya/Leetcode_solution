/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const maxElement = (mat, col) => {
    let maxVal = -1;
    let index = -1;
    for (let i = 0; i < mat?.length; i++) {
        if (mat[i][col] > maxVal) {
            maxVal = mat[i][col];
            index = i;
        }
    }
    return index;
}
var findPeakGrid = function (mat) {
    let n = mat?.length;
    let m = mat[0]?.length;
    let low = 0;
    let high = m - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        let row = maxElement(mat, mid);

        let left = mid - 1 >= 0 ? mat[row][mid - 1] : -1;
        let right = mid + 1 < m ? mat[row][mid + 1] : -1;

        if (mat[row][mid] > left && mat[row][mid] > right) {
            return [row, mid];
        } else if (left > mat[row][mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};