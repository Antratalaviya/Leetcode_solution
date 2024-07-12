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
    public TreeNode createBT(int[] postorder, HashMap<Integer, Integer> map, int inStart, int inEnd, int poStart,
            int poEnd) {
        if (inStart > inEnd || poStart > poEnd) {
            return null;
        }
        TreeNode root = new TreeNode(postorder[poEnd]);
        int mid = map.get(root.val);
        int numLeft = mid - inStart;

        root.left = createBT(postorder, map, inStart, mid - 1, poStart, poStart + numLeft - 1);
        root.right = createBT(postorder, map, mid + 1, inEnd, poStart + numLeft, poEnd - 1);

        return root;
    }

    public TreeNode buildTree(int[] inorder, int[] postorder) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < inorder.length; i++) {
            map.put(inorder[i], i);
        }
        return createBT(postorder, map, 0, inorder.length - 1, 0, postorder.length - 1);
    }
}