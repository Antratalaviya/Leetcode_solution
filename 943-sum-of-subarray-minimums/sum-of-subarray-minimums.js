/**
 * @param {number[]} arr
 * @return {number}
 */
let mod = (10 ** 9) + 7;
const findNSE = (arr) => {
    let st = [];
    let n = arr?.length;
    let ans = new Array(n).fill(n);

    for (let i = arr?.length - 1; i >= 0; i--) {
        while (st?.length && arr[st[st?.length - 1]] >= arr[i]) {
            st.pop();
        }
        if (st?.length) {
            ans[i] = st[st?.length - 1];
        }
        st.push(i);
    }
    return ans;
}
const findPSEE = (arr) => {
    let st = [];
    let ans = new Array(arr?.length).fill(-1);

    for (let i = 0; i < arr?.length; i++) {
        while (st?.length && arr[st[st?.length - 1]] > arr[i]) {
            st.pop();
        }
        if (st?.length) {
            ans[i] = st[st?.length - 1];
        }
        st.push(i);
    }
    return ans;
}
var sumSubarrayMins = function (arr) {
    let nse = findNSE(arr);
    let psee = findPSEE(arr);
    let sum = 0;
    
    for (let i = 0; i < arr?.length; i++) {
        let left = i - psee[i];
        let right = nse[i] - i;

        let freq = left * right;

        let val = (freq * arr[i]) % mod;

        sum = (sum + val) % mod;
    }

    return sum;
};