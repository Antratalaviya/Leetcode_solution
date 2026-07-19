/**
 * @param {character[][]} matrix
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(0);
    let n = heights?.length;
    let maxArea = 0;
    let st = [];

    for (let i = 0; i < n; i++) {
        while (st?.length && heights[st[st?.length - 1]] > heights[i]) {
            const height = heights[st.pop()];
            let width = st?.length ? i - st[st?.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, (height * width));
        }
        st.push(i);
    }
    return maxArea;
};

var maximalRectangle = function (matrix) {
    let m = matrix[0]?.length;
    let heights = new Array(m).fill(0);
    let maxArea = 0;

    for (let row of matrix) {
        for (let i = 0; i < m; i++) {
            if (row[i] === "1") heights[i]++;
            else heights[i] = "0";
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
};