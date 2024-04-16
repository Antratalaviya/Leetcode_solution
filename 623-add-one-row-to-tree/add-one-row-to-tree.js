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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
    if (!root) return;
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    function bfs(node, v, d) {
        if (d === depth) return;
        if (d + 1 === depth) {
            let newNodeL = new TreeNode(v, node.left, null);
            let newNodeR = new TreeNode(v, null, node.right);
            node.left = newNodeL;
            node.right = newNodeR;
            return;
        }
        if (node.left) bfs(node.left, v, d + 1);
        if (node.right) bfs(node.right, v, d + 1);
        return;
    }

    bfs(root, val, 1);
    return root;
};