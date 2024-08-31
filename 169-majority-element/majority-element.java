class Solution {
    public int majorityElement(int[] nums) {
        Integer candidate = null, count = 0;
        for (int num : nums) {
            if (candidate != null && num == candidate) {
                count++;
            } else if (count == 0) {
                candidate = num;
                count++;
            } else {
                count--;
            }
        }

        count = 0;
        for (int num : nums) {
            if (num == candidate) {
                count++;
            }
        }
        return candidate;
    }
}