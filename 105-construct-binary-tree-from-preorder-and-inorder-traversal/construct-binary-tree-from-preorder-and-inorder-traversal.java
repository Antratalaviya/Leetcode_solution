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
    public TreeNode createBT(int[] preorder, HashMap<Integer, Integer> map, int idx, int left, int right){
        TreeNode root = new TreeNode(preorder[idx]);
        int mid = map.get(preorder[idx]);
        if(left<mid){
            root.left = createBT(preorder, map, idx+1, left, mid-1);
        }
        if(right>mid){
            root.right = createBT(preorder, map, idx+mid-left+1, mid+1, right);
        }

        return root;
    }
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        HashMap<Integer, Integer> map = new HashMap();

        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }

        return createBT(preorder, map, 0, 0, inorder.length - 1);
    }
}