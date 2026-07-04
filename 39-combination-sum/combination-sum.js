/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const backTrack = (cand, index, res, target, candidates) => {
    if (index === candidates?.length) {
        if (target === 0) {
            res.push([...cand]);
        }
        return;
    }
    if (candidates[index] <= target) {
        cand.push(candidates[index]);
        backTrack(cand, index, res, target - candidates[index], candidates);
        cand.pop();
    }
    backTrack(cand, index + 1, res, target, candidates);
}
var combinationSum = function (candidates, target) {
    const res = [];
    backTrack([], 0, res, target, candidates);
    return res;
};