/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const backTrack = (tar, ind, ans, arr, ds) => {
    if (tar === 0) {
        ans.push([...ds]);
        return;
    }

    for (let i = ind; i < arr?.length; i++) {
        if (i > ind && arr[i] === arr[i - 1]) continue;

        if (arr[i] > tar) break;

        ds.push(arr[i]);
        backTrack(tar - arr[i], i + 1, ans, arr, ds);
        ds.pop();
    }
}
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];
    backTrack(target, 0, res, candidates, []);
    return res;
};