/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalRectangle = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let heights = new Array(n + 1).fill(0);
    let maxArea = 0;

    heights[heights.length - 1] = 0;

    for (let r = 0; r < m; r++) {
        let cols = [];
        cols.top = () => cols[cols.length - 1];
        for (let c = 0; c <= n; c++) {
            if (c < n) {
                if (matrix[r][c] === '1') heights[c]++;
                else heights[c] = 0;
            }
            
            while (cols.length && heights[cols.top()] > heights[c]) {
                let h = heights[cols.pop()];
                let w = cols.length ? c - cols.top() - 1 : c;
                maxArea = Math.max(maxArea, h * w);
            }
            cols.push(c);

        }
    }
    return maxArea;
};