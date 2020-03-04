const search = function (reader, target) {
    let increment = 1;
    let decrement = 1;
    let i = 0;
    let k = -1;
    while (decrement > 0) {
        k = reader.get(i);
        if (k < target) { 
            increment *= 2;
            decrement = increment;
            i += increment;
        } else if (k > target) {
            decrement = parseInt(decrement / 2);
            increment = parseInt(decrement / 2);
            i -= decrement;
        } else {
            return i;
        }
    }
    return -1;
};