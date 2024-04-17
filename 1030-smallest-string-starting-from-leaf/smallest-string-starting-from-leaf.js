/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let ans = [];
    function dfs(node, str) {
        if (!node) return;
        let temp = String.fromCharCode(97 + node.val) + str;
        if (!node.left && !node.right) return ans.push(temp);
        dfs(node.left, temp);
        dfs(node.right, temp);
        return;
    }

    dfs(root, '');
    ans.sort();
    return ans[0];
};