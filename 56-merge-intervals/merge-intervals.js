/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = [];
    intervals = intervals?.sort((a, b) => a[0] - b[0]);

    for (let interval of intervals) {
        if (!res?.length || res[res?.length - 1][1] < interval[0]) {
            res.push(interval);
        } else {
            const end = Math.max(interval[1], res[res?.length - 1][1]);
            res[res?.length - 1][1] = end;
        }
    }

    return res;
};