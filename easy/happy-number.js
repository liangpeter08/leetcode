// O(243⋅3+logn+loglogn+logloglogn)... = O(\log n)O(logn).

// time complexity hard to analyze
var isHappy = function(n) {
    let hashmap = {};
    let curr = n;
    while (!hashmap[curr] && curr !== 1) {
        let sum = 0;
        let k = curr;
        while (k !== 0) {
            sum += (parseInt(k % 10) ** 2);
            k = parseInt(k / 10);
        }
        hashmap[curr] = true;
        curr = sum;
    }
    
    return curr === 1;
};