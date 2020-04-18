// took 1 hour to figure out

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// build a tree from the characters
// hit -> expand
// cog -> expand
// shortest transformation

var ladderLength = function(beginWord, endWord, wordList) {
    let queue = {[beginWord]: true};
    let endQueue = {[endWord]: wordList.includes(endWord)};
    let counter = 1;
    if (!endQueue[endWord]) {
        return 0;
    };
    
    while (true) {
        queue = expandQueue(queue, wordList);
        ++counter;
                
        for (const item in queue) {
            if (endQueue[item]) {
                return counter;
            }
        }
        
        if (counter >= wordList.length + 1) {
            return 0;
        }
        
        endQueue = expandQueue(endQueue, wordList);
        ++counter;
        
        
        for (const item in queue) {
            if (endQueue[item]) {
                return counter;
            }
        }
        
        if (counter >= wordList.length + 1) {
            return 0;
        }
    }
};

const expandQueue = function (queue, wordList) {
     let temp = {};
    for (const item in queue) {
        if (!item) continue;
        for (const word of wordList) {
                if (word !== item && oneCharDiff(word, item)) {
                    temp[word] = true;
                }
            }
        }
        
    return temp;
}


const oneCharDiff = function (word, target) {
    let diff = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== target[i]) {
            ++diff;
        }
        
        if (diff === 2) {
            return false;
        }
    }
    return true;
}