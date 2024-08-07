class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();

        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int num = 0;
        int n = s.length();

        for (int i = n - 1; i >= 0; i--) {
            if (i + 1 < n && map.get(s.charAt(i)) < map.get(s.charAt(i+1))) {
                num -= map.get(s.charAt(i)); 
            }else {
                num += map.get(s.charAt(i));
            }
        }

        return num;
    }
}