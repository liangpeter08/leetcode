// Contiguous Subarrays
// You are given an array a of N integers. For each index i, you are required to determine the number of contiguous subarrays that fulfills the following conditions:
// The value at index i must be the maximum element in the contiguous subarrays, and
// These contiguous subarrays must either start from or end with i.
// Signature
// int[] countSubarrays(int[] arr)
// Input
// Array a is a non-empty list of unique integers that range between 1 to 1,000,000,000
// Size N is between 1 and 1,000,000
// Output
// An array where each index i contains an integer denoting the maximum number of contiguous subarrays of a[i]
// Example:
// a = [3, 4, 1, 6, 2]
// output = [1, 3, 1, 5, 1]
// Explanation:
// For index 0 - [3] is the only contiguous subarray that starts (or ends) with 3, and the maximum value in this subarray is 3.
// For index 1 - [4], [3, 4], [4, 1]
// For index 2 -[1]
// For index 3 - [6], [6, 2], [1, 6], [4, 1, 6], [3, 4, 1, 6]
// For index 4 - [2]
// So, the answer for the above input is [1, 3, 1, 5, 1]



function countSubarrays(arr) {
    if (arr.length === 0) {
      return [];
    } else if (arr.length === 1) {
      return [1];
    }
    
    const calcSubArr = function (stack, keepOne) {
      if (stack.length === 0) return;
      const [firstVal, firstIndex] = stack[0];
      const lastElement = [...stack[stack.length -1]];
      if (!keepOne) {
        stack.pop();
      }
  
      while(stack.length > keepOne) {
        const [val, index] = stack.pop();
        const extra = Math.abs(index - firstIndex);
        retVal[index] += extra;
      }
      if (!keepOne) {
        stack.push(lastElement);
      }
  
    };
  
    const retVal = new Array(arr.length).fill(1);
    let stackLeft = []; // [val, index]
    let stackRight = [];
  
    for (let i = 0; i < arr.length; i++) {
      const val = stackLeft[stackLeft.length - 1];
      if (!val || arr[i] > val[0]) {
        stackLeft.push([arr[i], i]);
      } else {
        calcSubArr(stackLeft, true);
      }
      const rightVal = stackRight[stackRight.length - 1];
      const rightIndex = arr.length - 1 - i;
      if (!rightVal || arr[rightIndex] > rightVal[0]) {
            stackRight.push([arr[rightIndex], rightIndex]);
      } else {
        stackRight.push([arr[rightIndex], rightIndex]);
        calcSubArr(stackRight, false);
      }
    }
    calcSubArr(stackLeft, true);
    calcSubArr(stackRight, true);
    return retVal;
  }
  
  console.log(countSubarrays([3,4,1,6,2]));
  
  console.log(countSubarrays([1,2,3,4,5,6,7,8]));
  console.log(countSubarrays([8,7,6,5,4,3,2,1]));