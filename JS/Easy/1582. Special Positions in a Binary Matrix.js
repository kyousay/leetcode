/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    let count = 0;
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 1 && mat[i].filter(m => m === 1) .length === 1) {
                if(mat.filter(m => m[j] === 1).length === 1) {
                    count += 1;
                }
            }
        }
    }
    return count;
};

// Runtime: 98 ms, faster than 36.11% of JavaScript online submissions for Special Positions in a Binary Matrix.
// Memory Usage: 45 MB, less than 8.33% of JavaScript online submissions for Special Positions in a Binary Matrix.

// URL: https://leetcode.com/problems/special-positions-in-a-binary-matrix/

// another answer
var numSpecial = function(mat) {
    const rowCounts = {};
    const colCounts = {};
    const arr = [];
    for(let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c++) {
            // 1の場合
            if(mat[r][c]) {
                arr.push([r, c]);
                if(rowCounts[r]) {
                    rowCounts[r]++;
                } else {
                    rowCounts[r] = 1;
                }
                if(colCounts[c]) {
                    colCounts[c]++;
                } else {
                    colCounts[c] = 1;
                }
            }
        }
    }
    return arr.filter(pair => {
        const r = pair[0];
        const c = pair[1];
        return rowCounts[r] === 1 && colCounts[c] === 1;
    }).length;
};

// Runtime: 72 ms, faster than 88.89% of JavaScript online submissions for Special Positions in a Binary Matrix.
// Memory Usage: 41.7 MB, less than 25.00% of JavaScript online submissions for Special Positions in a Binary Matrix.