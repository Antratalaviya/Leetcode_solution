class Solution {
    public int lengthOfLastWord(String str) {
        String s = str.trim();
        int res = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == ' ')
                break;
            res++;
        }
        return res;
    }
}