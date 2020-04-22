  const calcSubArr = function (stack) {
    if (stack.length === 0) return;
    const [firstVal, firstIndex] = stack[0];
    const lastElement = [...stack[stack.length -1]];
    while(stack.length > 1) {
      const [val, index] = stack.pop();
      const extra = Math.abs(index - firstIndex);
      retVal[index] += extra;
    }
    stack.push(lastElement);
  };
  
  const retVal = new Array(arr.length).fill(1);
  let stackLeft = []; // [val, index]
  let stackRight = [];

  for (let i = 0; i < arr.length; i++) {
    const val = stackLeft[stackLeft.length - 1];
    if (!val || arr[i] > val[0]) {
      stackLeft.push([arr[i], i]);
    }
    const rightVal = stackRight[stackRight.length - 1];
    const rightIndex = arr.length - 1 - i;
    if (!rightVal || arr[rightIndex] > rightVal[0]) {
          stackRight.push([arr[rightIndex], rightIndex]);
    }
  }

  calcSubArr(stackLeft);
  calcSubArr(stackRight);
  return retVal;
