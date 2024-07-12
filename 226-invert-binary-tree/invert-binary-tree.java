/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void helper(TreeNode node){
        if(node==null) return;

        TreeNode left = node.left;
        node.left = node.right;
        node.right = left;
        helper(node.left);
        helper(node.right);
    }
    public TreeNode invertTree(TreeNode root) {
        if(root == null ) return root;
        helper(root);
        return root;
        
    }
}