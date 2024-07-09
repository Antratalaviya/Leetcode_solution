class Solution {
    public int maxArea(int[] height) {
        int n = height.length;
        int left = 0, right = n - 1;
        int ans = 0, maxarea = 0;

        while (left < right) {
            ans = Math.min(height[left], height[right]);
            maxarea = Math.max(maxarea, ans * (right - left));

            while (left < right && height[left] <= ans)
                left++;
            while (left < right && height[right] <= ans)
                right--;
        }

        return maxarea;
    }
}