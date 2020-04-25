function countSubarrays(arr) {
    if (arr.length === 0) {
      return [];
    } else if (arr.length === 1) {
      return [1];
    }
    
    const calcSubArr = function (stack, retVal, maxSoFar, maxValue) {
      if (stack.length === 0) return;
      for (let element = 0; element < stack.length; element++) {
        const [val, i] = stack[element];
        if (val <= maxValue) {
          retVal[i] += element;
        } else {
            retVal[i] += maxSoFar + element;
          
        }
      }
    };
  
    const retVal = new Array(arr.length).fill(1);
    let stackLeft = []; // [val, index]
    let maxSoFar = 0;
    let maxVal = 0;
    let stackRight = [];

    for (let i = 0; i < arr.length; i++) {
      const val = stackLeft[stackLeft.length - 1];
      if (!val || arr[i] > val[0]) {
        stackLeft.push([arr[i], i]);
      } else {
        calcSubArr(stackLeft, retVal, maxSoFar, maxVal);
        stackLeft = [[arr[i], i]];
        maxVal = val[0];
        maxSoFar = val[1] - 1; // distance to first element
      }
    }
      calcSubArr(stackLeft, retVal, maxSoFar, maxVal);
      maxSoFar = 0;
      maxVal = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      const rightVal = stackRight[stackRight.length - 1];
      if (!rightVal || arr[i] > rightVal[0]) {
            stackRight.push([arr[i], i]);
      } else {
        calcSubArr(stackRight, retVal, maxSoFar, maxVal);
        stackRight = [[arr[i], i]];
        maxVal = rightVal[0];
        maxSoFar = arr.length - rightVal[1]; // distance to last element
      }
    }
    calcSubArr(stackRight, retVal, maxSoFar, maxVal);

    // calcSubArr(stackRight, true);
    return retVal;
  }
  
console.log(countSubarrays([2,4,7,1,5,3]))
  console.log(countSubarrays([3,4,1,6,2]));
    console.log(countSubarrays([1,2,3,4,5,6,7,8]));
  console.log(countSubarrays([8,7,6,5,4,3,2,1]));
  console.log(countSubarrays([6,12,2,1,6,9, 1, 3, 5, 8, 1, 2, 3]));


  function countSubarrays(arr) {
    if (arr.length === 0) {
      return [];
    } else if (arr.length === 1) {
      return [1];
    }
    
    const retVal = new Array(arr.length).fill(1);
    calcSub(retVal, arr, 0, arr.length, 1);
    // calcSub(retVal, arr, arr.length - 1, 0, -1);
    return retVal;
  }

const calcSub = function (retVal, arr, start, end, increment) {
    let minStack = []; // min element on top
    let prev = arr[start];
    let counter = 0;
    for (let i = start + increment; i !== end; i+= increment) {

        if (arr[i] > prev) {
          ++counter;
          retVal[i] += counter;
        } else {
          if (minStack[minStack.length - 1] < arr[i - increment]) {
          } else {
           retVal[i - increment] -= counter + 1;
            minStack.push({val: arr[i - increment], i: i - increment});
          }
          counter = 0;
        }
        prev = arr[i];
    }
    console.log(retVal);
    console.log(minStack);
    for (let elem = 1; elem < minStack.length; elem++) {
      const currI = minStack[elem].i;
      const prevI = minStack[elem - 1].i;
      if (increment > 0) {
        retVal[currI] += currI - prevI - 1;
      } else {
        retVal[currI] += prevI -currI - 1;
      }

    }
}


  
console.log(countSubarrays([2,4,7,1,5,3]));
  // console.log(countSubarrays([3,4,1,6,2]));
//     console.log(countSubarrays([1,2,3,4,5,6,7,8]));
//   console.log(countSubarrays([8,7,6,5,4,3,2,1]));
  // console.log(countSubarrays([6,12,2,1,6,9, 1, 3, 5, 8, 1, 2, 3]));