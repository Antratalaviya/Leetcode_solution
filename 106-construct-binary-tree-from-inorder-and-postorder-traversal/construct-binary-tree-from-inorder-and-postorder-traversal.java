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
    int i = 0, p = 0;

    public TreeNode createBT(int[] postorder, int[] inorder, int stop) {
        if (p < 0) {
            return null;
        }

        if (inorder[i] == stop) {
            i--;
            return null;
        }

        TreeNode root = new TreeNode(postorder[p--]);

        root.right = createBT(postorder, inorder, root.val);
        root.left = createBT(postorder, inorder, stop);

        return root;
    }

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        p = postorder.length - 1;
        i = p;
        return createBT(postorder, inorder, Integer.MIN_VALUE);
    }
}