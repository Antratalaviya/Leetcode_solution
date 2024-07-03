class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int n = gas.length;

        int sum = 0;
        int index = 0;
        int total = 0;

        for (int i = 0; i < n; i++) {
            sum += gas[i] - cost[i];
            if (sum < 0) {
                total += sum;
                index = i + 1;
                sum = 0;
            }
        }
        total += sum;
        if (total < 0) {
            return -1;
        }
        return index;
    }
}