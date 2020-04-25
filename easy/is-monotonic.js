var isMonotonic = function(A) {
    if (A[0] === A[A.length -1]) {
        return A.filter((item) => A[0] !== item).length === 0;
    }
    
    let isIncrease = A[0] < A[A.length -1];
    let prev = A[0];
    for (let i = 1; i < A.length; i++) {
        if (isIncrease && prev > A[i] || !isIncrease && prev < A[i]) {
                return false;
        }
        prev = A[i];
    }
    return true;
    
};