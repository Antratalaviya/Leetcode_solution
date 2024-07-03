class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0, n = gas.length;

        for (int i = 0; i < n; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if (totalGas < totalCost)
            return -1;

        int arr[][] = new int[n][3];

        for (int i = 0; i < n; i++) {
            arr[i][0] = gas[i];
            arr[i][1] = cost[i];
            arr[i][2] = i;
        }

        Arrays.sort(arr, (a, b) -> {
            if (a[0] - a[1] == b[0] - b[1]) {
                return a[1] - b[1];
            } else {
                return (b[0] - b[1]) - (a[0] - a[1]);
            }
        });

      

        for (int row[] : arr) {
            if (canMove(row[2], gas, cost) == true) {
                return row[2];
            }
        }
        return -1;
    }

    public boolean canMove(int i, int[] gas, int[] cost) {
        int maxIndex = i, fuel = 0, n = gas.length;
        do {
            fuel += gas[i];
            if (fuel < cost[i]) {
                return false;
            }
            fuel -= cost[i];
            i = (i + 1) % n;
        } while (i != maxIndex);
        return true;
    }
}