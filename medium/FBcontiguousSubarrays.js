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

// 8 Hours to figure out solution


// have one minStack [12, 9, 8], when you encounter a smaller number than prev,
// push that prev element on the minStack, pop off and calculate any element
// that is smaller than previous.
// Go both from the left and then the right.
// Left will yield all subarray that ends at index i
// go from right will yield all subarrays that start at index i
function countSubarrays(arr) {
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [1];
  }
  
  const retVal = new Array(arr.length).fill(1);
  calcSub(retVal, arr, 0, arr.length, 1);
  calcSub(retVal, arr, arr.length - 1, -1, -1);
  return retVal;
}

const calcSub = function (retVal, arr, start, end, increment) {
  let minStack = [{i: increment > 0 ? -1 : retVal.length - 2, val: Number.MAX_VALUE}]; // min element on top
  let prev = arr[start];
  let counter = 0;
  for (let i = start + increment; i !== end; i+= increment) {
      if (arr[i] > prev) {
        ++counter;
        retVal[i] += counter;
      } else {
        retVal[i - increment] -= counter;
        popPushStack(minStack, retVal, {val: arr[i - increment], i: i - increment});
        counter = 0;
      }
      prev = arr[i];
  }
  popPushStack(minStack, retVal);
}

const popPushStack = function (minStack, retVal, newVal) {
for (let elem = minStack.length - 1; elem > 0; elem--) {
    const currI = minStack[elem].i;
    if (newVal && minStack[elem].val > newVal.val) {
      minStack.push(newVal);
      return;
    }
    const prevI = minStack[elem - 1].i;
    retVal[currI] += Math.abs(currI - prevI - 1);
    minStack.pop();
}
  minStack.push(newVal);
}


console.log(countSubarrays([2,4,7,1,5,3]));
console.log(countSubarrays([3,4,1,6,2]));
console.log(countSubarrays([1,2,3,4,5,6,7,8]));
console.log(countSubarrays([8,7,6,5,4,3,2,1]));
console.log(countSubarrays([6,12,2,1,6,9, 1, 3, 5, 8, 1, 2, 3]));


// function countSubarrays(arr) {
//     if (arr.length === 0) {
//       return [];
//     } else if (arr.length === 1) {
//       return [1];
//     }
    
//     const calcSubArr = function (stack, keepOne) {
//       if (stack.length === 0) return;
//       const [firstVal, firstIndex] = stack[0];
//       const lastElement = [...stack[stack.length -1]];
//       if (!keepOne) {
//         stack.pop();
//       }
  
//       while(stack.length > keepOne) {
//         const [val, index] = stack.pop();
//         const extra = Math.abs(index - firstIndex);
//         retVal[index] += extra;
//       }
//       if (!keepOne) {
//         stack.push(lastElement);
//       }
  
//     };
  
//     const retVal = new Array(arr.length).fill(1);
//     let stackLeft = []; // [val, index]
//     let stackRight = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const val = stackLeft[stackLeft.length - 1];
//       if (!val || arr[i] > val[0]) {
//         stackLeft.push([arr[i], i]);
//       } else {
//         calcSubArr(stackLeft, true);
//       }
//       const rightVal = stackRight[stackRight.length - 1];
//       const rightIndex = arr.length - 1 - i;
//       if (!rightVal || arr[rightIndex] > rightVal[0]) {
//             stackRight.push([arr[rightIndex], rightIndex]);
//       } else {
//         stackRight.push([arr[rightIndex], rightIndex]);
//         calcSubArr(stackRight, false);
//       }
//     }
//     calcSubArr(stackLeft, true);
//     calcSubArr(stackRight, true);
//     return retVal;
//   }
  
//   console.log(countSubarrays([3,4,1,6,2]));
  
//   console.log(countSubarrays([1,2,3,4,5,6,7,8]));
//   console.log(countSubarrays([8,7,6,5,4,3,2,1]));