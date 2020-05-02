var myAtoi = function(str) {
    const strSpace = str.trim();
    let [k] = strSpace.split(' ');
    if (k[0] === '.') {
        k = 0 + k;   
    }
    const num = parseInt(k) || 0;
    

    const smallest = Math.pow(-2, 31);
    const biggest = Math.pow(2, 31) - 1;
    if (num < smallest) {
        return smallest;
    } else if (num > biggest) {
        return biggest;
    }
    return num; 
};