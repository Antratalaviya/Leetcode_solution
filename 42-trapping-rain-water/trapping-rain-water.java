class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int left_max = height[0], right_max = height[n - 1];
        int i = 0, j = n - 1;
        int water = 0;

        while (i < j) {
            if (left_max <= right_max) {
                water += left_max - height[i];
                i++;
                left_max = Math.max(left_max, height[i]);
            } else {
                water += right_max - height[j];
                j--;
                right_max = Math.max(right_max, height[j]);
            }
        }
        return water;
    }
}