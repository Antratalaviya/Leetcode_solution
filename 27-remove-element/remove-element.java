class Solution {
    public int removeElement(int[] nums, int val) {
        int ptr = 0;
        int len = nums.length;

        for (int i = 0; i < len; i++) {
            if(nums[i] != val){
                nums[ptr++] = nums[i];
            }
        }
        return ptr;
    }
}