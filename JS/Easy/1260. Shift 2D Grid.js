/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
    const arr = grid.flat();
    let res = [];
    for(let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    for(let i = 0; i < grid.length; i++) {
        const start = grid[0].length * i;
        const end = start + grid[0].length;
        res.push(arr.slice(start, end));
    }
    return res;
};

// URL: https://leetcode.com/problems/shift-2d-grid/

// Runtime: 117 ms, faster than 63.64% of JavaScript online submissions for Shift 2D Grid.
// Memory Usage: 47.9 MB, less than 50.65% of JavaScript online submissions for Shift 2D Grid.
