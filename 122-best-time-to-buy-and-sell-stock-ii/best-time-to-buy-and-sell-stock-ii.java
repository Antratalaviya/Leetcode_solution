class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int buy_price = prices[0];

        for(int i=1;i<prices.length;i++){
            if(buy_price< prices[i]){
                profit += prices[i] - buy_price;
            }
            buy_price = prices[i];
        }

        return profit;
    }
}