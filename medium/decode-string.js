const decodeString = function(s) {
    let strStack = [];
    let numStack = [];
    let opens = 0;
    let num = '';
    let str = '';
    let retVal = '';
    for (let ch of s) {
        if (ch === '[') {
            ++opens;
            numStack.push(num);
            num = '';
            strStack.push(str);
            str = '';
        } else if (ch === ']') {
            --opens;
            const repeat = numStack.pop();
            let tmp = str;
            for (let i = 1; i < repeat; i++) {
                str += tmp;
            }
            str = (strStack.pop() || '') + str;
            if (opens === 0) {
                retVal += str;
                str = '';
            }
        } else {
            if (isNaN(ch)) {
                str += ch;
            } else {
                num += ch;
            }
        }
    }
    return retVal + str;
};
