var binaryTreePaths = function(root) {
    if (!root)  return [];
    let stack = [{nodeT: root, retVal: ''}];

    let tmp = [];
    let returnVal = [];
    while(stack.length > 0) {
        const {nodeT, retVal} = stack.pop();

        let newVal = retVal + (retVal &&  '->') + nodeT.val;
        if (!nodeT.left && !nodeT.right) {
            returnVal.push(newVal);
        }
        if (nodeT.left) {
            tmp.push({nodeT: nodeT.left, retVal: newVal});
        }
        if (nodeT.right) {
            tmp.push({nodeT: nodeT.right, retVal: newVal});
        }
        if (stack.length === 0) {
            stack = tmp;
        }
    }
    return returnVal;  
};