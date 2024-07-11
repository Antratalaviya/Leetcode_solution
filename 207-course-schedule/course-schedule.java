class Solution {
    public boolean isCycle(ArrayList<Integer> graph[], boolean[] vis, int curr, boolean[] rec) {
        vis[curr] = true;
        rec[curr] = true;

        for (int i = 0; i < graph[curr].size(); i++) {

            int dst = graph[curr].get(i);

            if (rec[dst]) {
                return true;
            } else if (!vis[dst]) {
                if(isCycle(graph, vis, dst, rec)){
                    return true;
                }
            }
        }

        rec[curr] = false;
        return false;

    }

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        if (numCourses == 1 || prerequisites.length == 0) {
            return true;
        }
        ArrayList<Integer> graph[] = new ArrayList[numCourses];

        for (int i = 0; i < numCourses; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int[] i : prerequisites) {
            graph[i[1]].add(i[0]);
        }

        boolean[] vis = new boolean[numCourses];
        boolean[] rec = new boolean[numCourses];

        for (int i = 0; i < numCourses; i++) {
            if (!vis[i]) {
                if (isCycle(graph, vis, i, rec)) {
                    return false;
                }
            }
        }
        return true;
    }
}