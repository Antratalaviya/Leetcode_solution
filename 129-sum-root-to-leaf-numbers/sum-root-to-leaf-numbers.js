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
 * @return {number}
 */
var sumNumbers = function (root) {
    if (!root) return 0;
    let sum = 0;

    function dfs(node, path) {
        if (!node) return;
        if (!node.left && !node.right) {
            sum += path * 10 + node.val;
            return;
        }
        dfs(node.left, path * 10 + node.val);
        dfs(node.right, path * 10 + node.val);
    }

    dfs(root, 0);
    return sum
};