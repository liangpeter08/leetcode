
// memoize the substring already tried
// can use set
var wordBreak = function(s, wordDict) {
    const stack = [s];
    const cache = {};
    while (stack.length > 0) {
        let last = stack.pop();
        if (last === '') {
            return true;
        }
        for (const k of wordDict) {
            if (last.startsWith(k)) {
                const newStr = last.substring(k.length);
                if (!(newStr in cache)) {
                  cache[newStr] = true;
                  stack.push(newStr);
                }
      
            }
        }
    }
    return false;
};