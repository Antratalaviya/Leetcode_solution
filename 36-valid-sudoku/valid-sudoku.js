/**
 * @param {character[][]} board
 * @return {boolean}
 */
function set() {
    let s = new Set();
    return {
        addOnlyExisted(num) {
            if (s.has(num)) {
                return false;
            }
            s.add(num);
            return true;
        }
    }
}
var isValidSudoku = function (board) {
    let visited = set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j];
            if (char === '.') continue;

            if (
                !visited.addOnlyExisted(char + 'row' + i) ||
                !visited.addOnlyExisted(char + 'col' + j) ||
                !visited.addOnlyExisted(char + 'box' + Math.floor(i / 3) + Math.floor(j / 3))
            ) {
                return false;
            }
        }
    }
    return true;
};