class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int[] res = new int[2];
        int n = numbers.length;

        for (int i = 0; i < n - 1; i++) {
            int toFind = target - numbers[i];
            int result = search(numbers, i + 1, n - 1, toFind);

            if (result != -1) {
                res[0] = i + 1;
                res[1] = result;
                break;
            }
        }
        return res;
    };

    public int search(int[] arr, int i, int j, int target) {

        while (i <= j) {
            int mid = (i + j) / 2;
            if (arr[mid] == target) {
                return mid + 1;
            } else if (arr[mid] < target) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }
        return -1;
    }
}