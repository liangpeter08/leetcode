var isValidBST = function(root) {
    const stack = [];
    let curr = root;
    let maxSoFar = Number.NEGATIVE_INFINITY;
    while (curr !== null || stack.length > 0) {
        while(curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (curr.val <= maxSoFar) {
            return false;
        }

        maxSoFar = curr.val;
        curr = curr.right;
    }
    return true;
};