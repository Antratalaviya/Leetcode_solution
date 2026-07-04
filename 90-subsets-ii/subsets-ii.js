/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backTrack = (ind, ans, arr, ds) => {
    ans.push([...ds]);

    for (let i = ind; i < arr?.length; i++) {
        if (i > ind && arr[i] === arr[i - 1]) continue;

        ds.push(arr[i]);
        backTrack(i + 1, ans, arr, ds);
        ds.pop();
    }
}
var subsetsWithDup = function (nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    backTrack(0, res, nums, []);
    return res;
};