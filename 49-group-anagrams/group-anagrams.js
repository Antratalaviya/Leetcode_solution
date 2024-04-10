/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    let ans = [];

    for (let str of strs) {
        let curr = str.split('').sort().join('');
        if (map.has(curr)) {
            ans[map.get(curr)].push(str);
        } else {
            map.set(curr, ans.length);
            ans.push([str]);
        }
    }
    return ans;
};