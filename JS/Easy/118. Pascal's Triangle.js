/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let res = [];
    for(let i = 0; i < numRows; i++) {
        const row = [];
        for(let j = 0; j < i + 1; j++) {
            const num1 = (res[i - 1] && res[i - 1][j - 1]) || 0;
            const num2 = (res[i - 1] && res[i - 1][j]) || 0;
            const sum = Math.max(num1 + num2, 1);
            row.push(sum);
        }
        res.push(row);
    }
    return res;
};

// URL: https://leetcode.com/problems/pascals-triangle/

// Runtime: 51 ms, faster than 99.02% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 42.2 MB, less than 48.18% of JavaScript online submissions for Pascal's Triangle.