class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1)
            return s;
        int j = 0;
        boolean isBeginning = false;
        String[] table = new String[numRows];
        Arrays.fill(table, "");

        for (int i = 0; i < s.length(); i++) {
            if (j == 0)
                isBeginning = true;
            if (j == numRows - 1)
                isBeginning = false;
            if (j < numRows && isBeginning) {
                table[j] += s.charAt(i);
                j++;
            } else if (j >= 0 && !isBeginning) {
                table[j] += s.charAt(i);
                j--;
            }
        }
        String res = "";
        for (String strs : table) {
            res += strs;
        }
        return res;
    }
}