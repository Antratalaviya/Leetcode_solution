class Solution {
    public String reverseWords(String s) {
        String[] strs = s.split(" ");
        StringBuilder res = new StringBuilder();
        String pre = "";
        for (int i = strs.length - 1; i >= 0; i--) {
            if (!strs[i].isEmpty()) {
                res.append(pre);
                pre = " ";
                res.append(strs[i]);
            }
        }
        return res.toString();
    }
}