/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    int p = 0, i = 0;

    public TreeNode createBT(int[] preorder, int[] inorder, int stop) {
        if (p >= inorder.length) {
            return null;
        }

        if (inorder[i] == stop) {
            i++;
            return null;
        }

        TreeNode root = new TreeNode(preorder[p++]);

        root.left = createBT(preorder, inorder, root.val);
        root.right = createBT(preorder, inorder, stop);

        return root;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return createBT(preorder, inorder, Integer.MIN_VALUE);
    }
}