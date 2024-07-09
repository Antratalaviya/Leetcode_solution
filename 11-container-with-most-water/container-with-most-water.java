class Solution {
    public int maxArea(int[] height) {
        int n = height.length;
        int left = 0, right = n - 1;
        int max = 0, maxarea = 0;

        while (left < right) {
            if (height[left] <= height[right]) {
                max = (right - left) * height[left];
                left++;
            } else {
                max = (right - left) * height[right];
                right--;
            }

            maxarea = max > maxarea ? max : maxarea;
        }

        return maxarea;
    }
}