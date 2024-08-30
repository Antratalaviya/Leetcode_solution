class Solution {
    public int lengthOfLongestSubstring(String s) {
        int maxLen = 0, left = 0;
        HashSet<Character> char_set = new HashSet<>();

        for (int right = 0; right < s.length(); right++) {
            while (char_set.contains(s.charAt(right))) {
                char_set.remove(s.charAt(left));
                left++;
            }
            char_set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}