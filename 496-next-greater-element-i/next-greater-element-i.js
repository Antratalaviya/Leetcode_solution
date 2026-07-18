/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const indexMap = new Map();
    let st = [];
    let NGE = [];
    let ans = [];

    for (let i = 0; i < nums2?.length; i++) {
        indexMap.set(nums2[i], i);
    }

    for (let i = nums2?.length - 1; i >= 0; i--) {
        while (st?.length && nums2[st[st?.length - 1]] < nums2[i]) {
            st.pop();
        }

        if (!st.length) {
            NGE[i] = -1;
        } else {
            NGE[i] = nums2[st[st?.length - 1]];
        }
        st.push(i);
    }

    for (let i = 0; i < nums1?.length; i++) {
        ans[i] = NGE[indexMap.get(nums1[i])];
    }

    return ans;
};