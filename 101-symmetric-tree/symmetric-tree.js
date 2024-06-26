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
function dfs(p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    return p.val === q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
}
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    return dfs(root.left, root.right);
};