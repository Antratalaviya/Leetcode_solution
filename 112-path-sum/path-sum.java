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
    public boolean dfs(TreeNode node, int targetSum, int pathsum) {
        if (node.left==null && node.right==null && pathsum == targetSum) {
            return true;
        }

        if (node.left != null) {
            if (dfs(node.left, targetSum, pathsum + node.left.val)) {
                return true;
            }

        }
        if (node.right != null) {
            if (dfs(node.right, targetSum, pathsum + node.right.val)) {
                return true;
            }
        }

        return false;
    }

    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null)
            return false;
        return dfs(root, targetSum, root.val);
    }
}