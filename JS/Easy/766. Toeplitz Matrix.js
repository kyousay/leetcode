/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    for(let i = 0; i < matrix.length - 1; i++) {
        for(let j = 0; j < matrix[i].length - 1; j++) {
            if(matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false
            };
        }
    }
    return true;
};

// URL: https://leetcode.com/problems/toeplitz-matrix/

// Runtime: 64 ms, faster than 97.09% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 44.2 MB, less than 56.55% of JavaScript online submissions for Toeplitz Matrix.

// another answer
const isToeplitzMatrix = matrix => {
    for (let i = 0, len = matrix.length-1; i < len; i++) {
        const thisRow = matrix[i].slice(0, -1);
        const nextRow = matrix[i+1].slice(1);
        const isEqual = thisRow.every((v, j) => v === nextRow[j]);
        if(!isEqual) return false;
    }
    return true;
};

// Runtime: 68 ms, faster than 94.59% of JavaScript online submissions for Toeplitz Matrix.
// Memory Usage: 44.4 MB, less than 36.17% of JavaScript online submissions for Toeplitz Matrix.