/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const getMax = (nums) => {
        let maxRob = 0
        let prevRob = 0

        for (let num of nums) {
            const tem = Math.max(maxRob, prevRob + num);
            prevRob = maxRob;
            maxRob = tem;
        }
        return maxRob;
    }

    if (nums.length === 1) {
        return nums[0]
    }
    return Math.max(getMax(nums.slice(0, -1)), getMax(nums.slice(1)), nums[0])
};