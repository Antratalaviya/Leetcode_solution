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
    public int maxsum;

    public int maxPath(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int leftsum = maxPath(node.left);
        int rightsum = maxPath(node.right);

        leftsum = Math.max(leftsum, 0);
        rightsum = Math.max(rightsum, 0);

        int curr = leftsum + rightsum + node.val;
        maxsum = Math.max(curr, maxsum);

        return Math.max(leftsum, rightsum) + node.val;

    }

    public int maxPathSum(TreeNode root) {
        if (root == null) {
            return 0;
        }
        maxsum = Integer.MIN_VALUE;
        maxPath(root);
        return maxsum;
    }
}