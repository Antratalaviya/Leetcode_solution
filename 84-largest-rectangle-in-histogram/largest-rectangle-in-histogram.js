/**
 * @param {number[]} heights
 * @return {number}
 */
const findNSE = (arr) => {
    let n = arr?.length;
    let st = [];
    let ans = new Array(n).fill(n - 1);

    for (let i = n - 1; i >= 0; i--) {
        while (st?.length && arr[st[st?.length - 1]] >= arr[i]) {
            st.pop();
        }
        if (st?.length) {
            ans[i] = st[st?.length - 1] - 1;
        }
        st.push(i);
    }
    return ans;
}
const findPSEE = (arr) => {
    let n = arr?.length;
    let st = [];
    let ans = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (st?.length && arr[st[st?.length - 1]] >= arr[i]) {
            st.pop();
        }
        if (st?.length) {
            ans[i] = st[st?.length - 1] + 1;
        }
        st.push(i);
    }
    return ans;
}
var largestRectangleArea = function (heights) {
    const nse = findNSE(heights);
    const psee = findPSEE(heights);
    let n = heights?.length;
    let res = 0;
    
    for (let i = 0; i < n; i++) {
        let left = psee[i];
        let right = nse[i];

        let width = right - left + 1;

        res = Math.max(res, (heights[i] * width));
    }
    return res;
};