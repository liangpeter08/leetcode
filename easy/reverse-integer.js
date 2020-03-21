/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const maxNumCheck  = (c) => (c === 0 || c >= 2 ** 31 ||  c < -(2 ** 31));
    if(maxNumCheck(x)) {
        return 0;
    }
    
    let remainder = Math.abs(x);
    let sum = '';
    while (remainder !== 0) {
        sum += remainder % 10;
        remainder = parseInt(remainder / 10);
    }
    
    
    sum = parseInt(sum);
    if (maxNumCheck(sum)) {
        return 0;
    } 
    
    if (x > 0) {
        return sum;
    } else {
        return -sum;
    }
    
};