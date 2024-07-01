class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        int buy_price = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < n; i++) {
            if (buy_price < prices[i])
                maxProfit += prices[i] - buy_price;
            buy_price = prices[i];
        }

        return maxProfit;
    }
}