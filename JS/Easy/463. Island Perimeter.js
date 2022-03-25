/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let num = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j]) {
                !(grid[i - 1] && grid[i - 1][j]) && num++;
                !(grid[i + 1] && grid[i + 1][j]) && num++;
                !(grid[i] && grid[i][j - 1]) && num++;
                !(grid[i] && grid[i][j + 1]) && num++;
            }
        }
    }
    return num;
};

// URL: https://leetcode.com/problems/island-perimeter/

// Runtime: 264 ms, faster than 34.32% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 50.4 MB, less than 67.49% of JavaScript online submissions for Island Perimeter.

// 配列の添字を-1にしてもundefinedになることを初めて知った。