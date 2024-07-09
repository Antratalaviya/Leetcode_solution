class Solution {
    public boolean isPalindrome(String s) {
        String str = "";

        for (int i = 0; i < s.length(); i++) {
            Character c = s.charAt(i);
            if (Character.isLetterOrDigit(c)) {
                if (Character.isUpperCase(c)) {
                    str += Character.toLowerCase(c);
                } else {
                    str += c;
                }
            }
        }
        int start = 0,
                end = str.length() - 1;
        while (start < end) {
            if(str.charAt(start++)!=str.charAt(end--)) {
                return false;
            }
        }
        System.out.println(str);
        return true;
    }
}