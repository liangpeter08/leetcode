// bfs
var calcMaxCost = function (arr) {
    return calcMaxCurr(arr, 0);
  };
  
  const calcMaxCurr = function (arr, totalCost) {
    let currMaxCost = 0;
    let maxCostIndex = [];
    if (arr.length === 2) {
      return totalCost + arr[0] + arr[1];
    }
  
    for (let i = 0; i + 1 < arr.length; i++) {
      const sum = arr[i] + arr[i + 1];
      if (sum === currMaxCost) {
        maxCostIndex.push(i);
        currMaxCost = sum;
      }
      if (sum > currMaxCost) {
        maxCostIndex = [i];
        currMaxCost = sum;  
      }
    }
    let subCost = 0;
    for (const i of maxCostIndex) {
      const mutatedArr = [...arr];
      mutatedArr.splice(i, 2, currMaxCost);
      const recursiveSubCost = calcMaxCurr(mutatedArr, totalCost + currMaxCost);
      subCost = Math.max(subCost, recursiveSubCost);
    }
    return subCost;
  };

var calcMaxCost = function (arr) {
    let stack = [{array, cost: 0}];
    let maxCost = 0;
    while (stack.length > 0) {
        const {array, cost} = stack.pop();
        let currMaxCost = 0;
        if (array.length === 2) {
            maxCost = Math.max(maxCost, maxCostcost + array[0] + array[1]);
            continue;
        }

        for (let i = 0; i + 1 < array.length; i++) {
            const sum = array[i] + array[i + 1];
            if (sum === currMaxCost) {
                const mutatedArr = [...arr];
                mutatedArr.splice(i, 2, currMaxCost);
                stack.push({array: mutatedArr, cost: totalCost + currMaxCost});
                currMaxCost = sum;
            }
            if (sum > currMaxCost) {
                maxCostIndex = [i];
                currMaxCost = sum;  
            }
        }

    }
};

  
  console.log(calcMaxCost([4,2,1,3]));
  console.log(calcMaxCost([1,6,1,2,2]));



// dfs
  var calcMaxCost = function (arr) {
    let stack = [{left: arr, cost: 0}];
    let maxCost = 0;
    while (stack.length > 0) {
        const {left, cost} = stack.pop();
        let currMaxCost = 0;
        if (left.length === 2) {
            maxCost = Math.max(maxCost, cost + left[0] + left[1]);
            continue;
        }
        for (let i = 0; i + 1 < left.length; i++) {
            const sum = left[i] + left[i + 1];
            if (sum === currMaxCost) {
                currMaxCost = sum;
                const mutatedArr = [...left];
                mutatedArr.splice(i, 2, sum);
                stack.push({left: mutatedArr, cost: cost + sum});
            }
            if (sum > currMaxCost) {
                maxCostIndex = [i];
                const mutatedArr = [...left];
                mutatedArr.splice(i, 2, sum);
                stack.push({left: mutatedArr, cost: cost + sum});
                currMaxCost = sum;  
            }
        }
    }
    return maxCost;
};

  
  console.log(calcMaxCost([4,2,1,3]));
  console.log(calcMaxCost([1,6,1,2,2]));
  
  