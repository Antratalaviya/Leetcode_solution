class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> res = new ArrayList<>();
        int index = 0, n = words.length;

        while (index < n) {
            int totalChars = words[index].length();
            int last = index + 1;

            while (last < n) {
                if (totalChars + 1 + words[last].length() > maxWidth)
                    break;
                totalChars += 1 + words[last].length();
                last++;
            }

            StringBuilder line = new StringBuilder();
            int wordGap = last - index - 1;
            if (last == n || wordGap == 0) {
                for (int i = index; i < last; i++) {
                    line.append(words[i]);
                    if (i < last - 1) {
                        line.append(" ");
                    }
                }
                while (line.length() < maxWidth) {
                    line.append(" ");
                }
            } else {
                int space = (maxWidth - totalChars) / wordGap;
                int extraSpace = (maxWidth - totalChars) % wordGap;

                for (int i = index; i < last; i++) {
                    line.append(words[i]);
                    if (i < last - 1) {
                        for (int j = 0; j <= space + (i - index < extraSpace ? 1 : 0); j++) { // extraSpace needed then
                                                                                              // it should taken after
                                                                                              // first word.
                            line.append(" ");
                        }
                    }
                }
            }
            res.add(line.toString());
            index = last;
        }

        return res;
    }
}