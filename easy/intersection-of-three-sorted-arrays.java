import java.util.ArrayList;

class Solution {
    public List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {
        int i = 0, j = 0, k = 0;
        ArrayList<Integer> res = new ArrayList<Integer>();
        while ( i < arr1.length && j < arr2.length && k < arr3.length) {
            if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
                res.add(arr1[i]);
                ++i;
                ++j;
                ++k;
                continue;
            }
            int minValue = Math.min(Math.min(arr1[i], arr2[j]), arr3[k]);
            if (minValue == arr1[i]) {
                ++i;
            }
            if (minValue == arr2[j]) {
                ++j;
            }
            if (minValue == arr3[k]) {
                ++k;
            }
        }
        return res;
    }
}