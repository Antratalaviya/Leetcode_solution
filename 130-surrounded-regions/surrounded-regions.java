class Solution {
    public void explore(char[][] graph, int i, int j) {
        int n = graph.length;
        int m = graph[0].length;

        if (i < 0 || i >= n || j < 0 || j >= m || graph[i][j] != 'O') {
            return;
        }

        graph[i][j] = '*';

        explore(graph, i + 1, j);
        explore(graph, i - 1, j);
        explore(graph, i, j + 1);
        explore(graph, i, j - 1);

    }

    public void solve(char[][] board) {
        for (int i = 0; i < board[0].length; i++) {
            if (board[0][i] == 'O') {
                explore(board, 0, i);
            }
            if (board[board.length - 1][i] == 'O') {
                explore(board, board.length - 1, i);
            }
        }

        for (int i = 0; i < board.length; i++) {
            if (board[i][0] == 'O') {
                explore(board, i, 0);
            }
            if (board[i][board[0].length - 1] == 'O') {
                explore(board, i, board[0].length - 1);
            }
        }

        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
                if (board[i][j] == '*') {
                    board[i][j] = 'O';
                }
            }
        }
    }
}