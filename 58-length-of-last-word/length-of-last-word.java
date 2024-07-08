class Solution {
    public int lengthOfLastWord(String s) {
        int res = 0, index = s.length() - 1;

        while (index >= 0 && s.charAt(index) == ' ') {
            index--;
        }

        while (index >= 0 && s.charAt(index) != ' ') {
            index--;
            res++;
        }

        return res;
    }
}

/**
 * public int lengthOfLastWord(String str) {
 * String s = str.trim();
 * int res = 0;
 * for (int i = s.length() - 1; i >= 0; i--) {
 * if (s.charAt(i) == ' ')
 * break;
 * res++;
 * }
 * return res;
 * }
 */