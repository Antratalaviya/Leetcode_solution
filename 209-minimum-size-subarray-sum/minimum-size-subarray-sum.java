class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0, min_size = Integer.MAX_VALUE, total = 0;

        for(int right = 0; right<nums.length;right++){
            total += nums[right];
            while(total>= target){
                total -= nums[left];
                min_size = Math.min(min_size, (right - left + 1));
                left++;
            }
        }
        return min_size == Integer.MAX_VALUE ? 0 : min_size;
    }
}