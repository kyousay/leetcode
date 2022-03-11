/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    const hash = {};
    for(let i = 0; i < mat.length; i ++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 0) {
                hash[i] = j;
                break;
            } else if(j === mat[i].length - 1) {
                hash[i] = j + 1;
            }
        }
    }
    return Object.entries(hash).sort((x, y) => x[1] - y[1]).slice(0, k).map(val => Number(val[0]));
};

// Runtime: 68 ms, faster than 99.45% of JavaScript online submissions for The K Weakest Rows in a Matrix.
// Memory Usage: 41.2 MB, less than 24.72% of JavaScript online submissions for The K Weakest Rows in a Matrix.

// URL: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/