class Solution {
    public int maxProfit(int[] prices) {
        int buy_price = prices[0];
        int profit = 0;

        for(int price : prices){
            if(buy_price>price){
                buy_price = price;
            }
            profit = Math.max(profit, price - buy_price);
        }
        return profit;
    }
}