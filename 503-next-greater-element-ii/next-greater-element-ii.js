/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let n = nums?.length;
    let nge = new Array(n).fill(-1);
    let st = [];
    let newN = nums?.length * 2 - 1;

    for (let i = newN; i >= 0; i--) {
        let ind = i % n;
        let currEle = nums[ind];
        while (st?.length && st[st?.length - 1] <= currEle) {
            st.pop();
        }

        if (i < n) {
            if (st?.length) {
                nge[i] = st[st?.length - 1];
            }
        }
        st.push(currEle);
    }
    return nge;
};