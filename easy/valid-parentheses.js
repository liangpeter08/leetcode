var isValid = function(s) {
    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for (const c of s) {
        if (mapping[c]) {
            stack.push(c);
        } else {
           const openBracket = stack.pop();
           if (!openBracket || mapping[openBracket] !== c) {
               return false;
           }
        }
    }
    
    return stack.length === 0;
};