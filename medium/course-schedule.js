// TODO: need to fix performance with numCourses param

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var hashTable = {};
    for (let i = 0; i < prerequisites.length; ++i) {
        if (!hashTable[prerequisites[i][0]]) {
            hashTable[prerequisites[i][0]] = [];
        }
        hashTable[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    
    let reduced = true;
    while(reduced) {
        reduced = false;
        for(let k in hashTable) {
            for(let j in hashTable[k]) {
                if(!hashTable[hashTable[k][j]] || hashTable[hashTable[k][j]].length === 0) {
                    reduced = true;
                    hashTable[k].splice(j, 1);
                }
            }
        }
    }

    for(let k in hashTable) {
        if (hashTable[k] && hashTable[k].length > 0) {
            return false;
        }
    }

    return true;
};

