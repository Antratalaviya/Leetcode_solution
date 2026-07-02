/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const backTrack = (index, sub, res, nums) => {
    if (index === nums?.length) {
        res.push([...sub]);
        return;
    }
    sub.push(nums[index]);
    backTrack(index + 1, sub, res, nums);

    sub.pop();
    backTrack(index + 1, sub, res, nums);
}

var subsets = function (nums) {
    const res = [];
    backTrack(0, [], res, nums)
    return res;
};