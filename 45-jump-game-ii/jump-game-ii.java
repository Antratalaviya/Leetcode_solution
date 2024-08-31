class Solution {
    public int jump(int[] nums) {
        int res = 0;
        int farthest = 0;
        int l = 0, r = 0;
        int n = nums.length;

        while(r<n-1){
            for(int i = l;i<=r;i++){
                farthest = Math.max(farthest, i+nums[i]);
            }
            l=r+1;
            r = farthest;
            res++;
        }
        return res;
    }
}