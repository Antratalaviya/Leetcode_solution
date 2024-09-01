class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int sum = 0, total=0,index=0;

        for(int i=0;i<gas.length;i++){
            sum += gas[i] - cost[i];
            if(sum<0){
                total += sum;
                index = i + 1;
                sum = 0;
            }
        }

        total += sum;
        return total < 0 ? -1 : index;
    }
}