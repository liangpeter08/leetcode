// note: es6 syntax runtime really bad
var countComponents = function(n, edges) {
    const hashMap = {};

    const nodeList = {};
    for (let i = 0; i < edges.length; i++) {
        const [first, next] = edges[i];
        if(!nodeList[first]) {
            nodeList[first] = [];
        } 
        if(!nodeList[next]) {
            nodeList[next] = [];
        }
        nodeList[first].push(next);
        nodeList[next].push(first);
    }
    let count = 0;
    for (const node in nodeList) {
        let stack = [];
        if (!hashMap[node]) {
            stack = nodeList[node];
            hashMap[node] = true;
            ++count;
        }
        while (stack.length > 0) {
            const k = stack.pop();
            if (nodeList[k] && !hashMap[k]) {
                for (let i = 0; i < nodeList[k].length; i++) {
                    stack.push(nodeList[k][i]);
                }

            }
            hashMap[k] = true;
        }
    }
    return count + n - Object.keys(hashMap).length;
};