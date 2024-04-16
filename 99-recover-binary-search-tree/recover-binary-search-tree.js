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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let max = null;
    let min = null;
    let prev = null;

    function inOrder(node) {
        if (!node) return;
        
        inOrder(node.left);

        if (prev && prev.val > node.val) {
            min = node;
            if (max) return;
            max = prev;
        }
        prev = node;
        inOrder(node.right);
        return;
    }

    inOrder(root);
    [max.val, min.val] = [min.val, max.val];
};