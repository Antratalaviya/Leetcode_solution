/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const backTrack = (k, tar, ind, ans, ds) => {
    if (ds?.length === k && tar === 0) {
        ans.push([...ds]);
        return;
    }

    if (tar <= 0 || ds?.length > k) return;

    for (let i = ind; i <= 9; i++) {
        if (i > tar) break;
        ds.push(i);
        backTrack(k, tar - i, i + 1, ans, ds);
        ds.pop();
    }
}
var combinationSum3 = function (k, n) {
    const res = [];
    backTrack(k, n, 1, res, []);
    return res;
};