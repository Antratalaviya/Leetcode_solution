class Solution {
    public int jump(int[] nums) {
        int n = nums.length;
        int l = 0, r = 0;
        int res = 0;

        while (r < n - 1) {
            int farthest = 0;
            for (int i = l; i <= r; i++) {
                farthest = farthest > i + nums[i] ? farthest : i + nums[i];
            }
            l = r + 1;
            r = farthest;
            res += 1;
        }
        return res;
    }
}