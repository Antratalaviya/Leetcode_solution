class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length==0)
            return "";
        String prefix = strs[0];

        for (String s : strs) {
            while (s.indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix == "")
                    return "";
            }
        }

        return prefix;
    }
}