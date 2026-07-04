/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const backTrack = (k, tar, ind, ans, arr, ds) => {
    if (ds?.length === k && tar === 0) {
        ans.push([...ds]);
    }

    for (let i = ind; i < arr?.length; i++) {

        if (arr[i] > tar) break;

        ds.push(arr[i]);
        backTrack(k, tar - arr[i], i + 1, ans, arr, ds);
        ds.pop();
    }
}
var combinationSum3 = function (k, n) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = [];
    backTrack(k, n, 0, res, arr, []);
    return res;
};