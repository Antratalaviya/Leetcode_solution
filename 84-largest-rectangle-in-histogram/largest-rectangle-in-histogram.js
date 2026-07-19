/**
 * @param {number[]} heights
 * @return {number}
 */
const findNSE = (arr) => {
    let n = arr?.length;
    let st = [];
    let ans = new Array(n).fill(n - 1);


    return ans;
}
const findPSEE = (arr) => {
    let n = arr?.length;

    return ans;
}
var largestRectangleArea = function (heights) {
    let n = heights?.length;
    const leftSmall = new Array(n);
    const rightSmall = new Array(n);

    let st = [];

    //Left small
    for (let i = 0; i < n; i++) {
        while (st?.length && heights[st[st?.length - 1]] >= heights[i]) {
            st.pop();
        }
        leftSmall[i] = st?.length ? st[st?.length - 1] + 1 : 0;
        st.push(i);
    }

    st = [];

    //Right small
    for (let i = n - 1; i >= 0; i--) {
        while (st?.length && heights[st[st?.length - 1]] >= heights[i]) {
            st.pop();
        }
        rightSmall[i] = st?.length ? st[st?.length - 1] - 1 : n - 1;
        st.push(i);
    }

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = rightSmall[i] - leftSmall[i] + 1;
        maxArea = Math.max(maxArea, (heights[i] * width));
    }
    return maxArea;
};