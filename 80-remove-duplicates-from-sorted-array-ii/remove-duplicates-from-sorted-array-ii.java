class Solution {
    public int removeDuplicates(int[] nums) {
        int ptr = 2;
        int n = nums.length;

        if(n<=2){
            return n;
        }

        for (int i = 2; i < n; i++) {
            if(nums[i] != nums[ptr-2]){
                nums[ptr++] = nums[i];
            }
        }
        return ptr;
    }
}