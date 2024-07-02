class Solution {
    public int hIndex(int[] citations) {
        int[] freq = new int[1001];
        int count_citations = 0;
        int max = Integer.MIN_VALUE;

        for (int c : citations) {
            freq[c]++;
            max = Math.max(c, max);
        }

        int h = max;
        for (; h >= 0; h--) {
            count_citations += freq[h];
            if (count_citations >= h)
                break;
        }
        return h;
    }
}