// trick multiply will cause integer overflow
var addStrings = function(num1, num2) {
    let p = num1.length - 1;
    let p2 = num2.length - 1;
    let total = 0;
    let final = '';
    while (p >= 0 || p2 >= 0) {
        let sum = 0;
        if (p >= 0) {
            sum += parseInt(num1[p]);
        }
        
        if (p2 >= 0) {
            sum += parseInt(num2[p2]);
        }
        
        total += sum;
        final = (total % 10) + final;
        total = parseInt(total / 10);

        --p;
        --p2;
    }
    return total > 0 ? total + final : final;
};