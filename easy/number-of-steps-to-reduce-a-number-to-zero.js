/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {    
    const step = function (num) {
        if (num === 0) {
            return 0;
        }
        if (num % 2 === 0) {
            return 1 + step(num / 2);
        } else {
            return 1 + step(num - 1);
        }
    };
    
    return step(num);
};