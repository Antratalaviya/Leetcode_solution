class Solution {
    public boolean threeConsecutiveOdds(int[] arr) {
        int len = arr.length;
        int window = 0;
        for (int i = 0; i < 3 && i < len; i++) {
            window += arr[i] % 2;
        }
        if (window == 3)
            return true;
        for (int i = 3; i < len; i++) {
            window += arr[i] % 2;
            window -= arr[i - 3] % 2;
            if (window == 3)
                return true;
        }
        return false;
    }

}

// public boolean threeConsecutiveOdds(int[] arr) {
// int len = arr.length;
// int count = 0;
// for (int i = 0; i < len; i++) {
// if (arr[i] % 2 != 0) {
// count++;
// } else {
// count = 0;
// }
// if (count == 2 && i + 1 < len && arr[i + 1] % 2 != 0) {
// return true;
// }

// }
// return false;
// }