/**
 * @param {number[]} heights
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