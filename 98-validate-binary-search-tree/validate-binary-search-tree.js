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
 * @return {boolean}
 */

var isValidBST = function (root) {
    let min = Math.pow(-2, 31) - 1
    let max = Math.pow(2, 31);

    function dfs(node, min, max) {
        if (!node) return true
        if (node.val <= min || node.val >= max) {
            return false
        }
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }
    return dfs(root, min, max)
};