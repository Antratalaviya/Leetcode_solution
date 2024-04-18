/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
    let island = 0;
    let neighbour = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                island++;
                if (i - 1 >= 0 && grid[i - 1][j] === 1) neighbour++;
                if (j - 1 >= 0 && grid[i][j - 1] === 1) neighbour++;
            }
        }
    }

    return (island * 4) - (neighbour * 2);
};