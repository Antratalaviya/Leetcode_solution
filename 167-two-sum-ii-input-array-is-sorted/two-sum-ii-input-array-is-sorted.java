class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int n = numbers.length;
        int start = 0, end = n - 1;

        while (start < end) {
            int sum = numbers[start] + numbers[end];
            int mid = (start + end) / 2;

            if (sum == target) {
                return new int[] { start + 1, end + 1 };
            } else if (sum > target) {
                if (numbers[start] + numbers[mid] > target) {
                    end = mid - 1;
                } else {
                    end--;
                }
            } else {
                if (numbers[end] + numbers[mid] < target) {
                    start = mid + 1;
                } else {
                    start++;
                }
            }
        }
        return new int[] { -1, -1 };
    };

}

/**
 * public int[] twoSum(int[] numbers, int target) {
 * int[] res = new int[2];
 * int n = numbers.length;
 * 
 * for (int i = 0; i < n - 1; i++) {
 * int toFind = target - numbers[i];
 * int result = search(numbers, i + 1, n - 1, toFind);
 * 
 * if (result != -1) {
 * res[0] = i + 1;
 * res[1] = result;
 * break;
 * }
 * }
 * return res;
 * };
 * 
 * public int search(int[] arr, int i, int j, int target) {
 * 
 * while (i <= j) {
 * int mid = (i + j) / 2;
 * if (arr[mid] == target) {
 * return mid + 1;
 * } else if (arr[mid] < target) {
 * i = mid + 1;
 * } else {
 * j = mid - 1;
 * }
 * }
 * return -1;
 * }
 */