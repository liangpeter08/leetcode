// https://leetcode.com/problems/armstrong-number/

class Solution {
    public boolean isArmstrong(int N) {
        int remainder = N;
        int digits = 0;
        while (remainder != 0) {
            remainder = remainder / 10;
            ++digits;
        }

        int sum = 0;
        remainder = N;
        int counter = digits;
        while (counter != 0) {
            sum += Math.pow(remainder % 10, digits);
            remainder /= 10;
            counter--;
        }
        return sum == N;
    }
}