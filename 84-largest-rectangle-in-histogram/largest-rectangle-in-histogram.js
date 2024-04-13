/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.push(0);
    let ans = 0;

    let cols = [];
    cols.top = () => cols[cols.length - 1];

    for (let i = 0; i < heights.length; i++) {
        while (cols.length && heights[cols.top()] > heights[i]) {
            let h = heights[cols.pop()];
            let w = cols.length ? i - cols.top() - 1 : i;
            ans = Math.max(ans, h * w);
        }
        cols.push(i);
    }
    return ans;
};