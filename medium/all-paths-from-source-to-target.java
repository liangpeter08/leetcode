class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> retVal = new ArrayList<List<Integer>>();
        ArrayList<Integer> start = new ArrayList<Integer>();
        start.add(0);
        retVal.add(start);
        findNextNode(graph, retVal);
        return retVal;
    }
    
    public void findNextNode(int[][] graph, List<List<Integer>> retVal) {
        int originalLength = retVal.size();
        int totalIncomplete = 0;
        for(int i = 0; originalLength > 0; i++) {
            List<Integer> curr = retVal.get(i);
            int index = retVal.get(i).get(curr.size() - 1);
            if (index + 1 == graph.length) {
                originalLength--;
                continue;
            }
            totalIncomplete++;
            for(int j = 0; j < graph[index].length; j++) {
                List<Integer> newArr = new ArrayList<Integer>(curr);
                originalLength--;
                System.out.println(index);
                System.out.println(j);
                newArr.add(graph[index][j]);
                retVal.add(newArr);
            }
            retVal.remove(i);
        }
        if (totalIncomplete > 0) {
            findNextNode(graph, retVal);
        }
    }
}