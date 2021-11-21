/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    const row = new Array(matrix[0].length).fill(0);
    const column = new Array(matrix[0].length).fill(0);
    for(let i = 0; i < matrix.length; i++) {
        let hash = {};
        for(let j = 0; j < matrix[i].length; j++) {
            column[j] = Math.max(column[j], matrix[i][j]);
            hash[matrix[i][j]] = j;
            if(j === matrix[i].length - 1) {
                const key = Math.min(...Object.keys(hash));
                row[hash[key]] = Math.max(row[hash[key]], key);
            }
        }
    }
    return row.filter((val, index) => val === column[index]);
};

// Runtime: 116 ms, faster than 21.48% of JavaScript online submissions for Lucky Numbers in a Matrix.
// Memory Usage: 48.2 MB, less than 5.19% of JavaScript online submissions for Lucky Numbers in a Matrix.

// URL: https://leetcode.com/problems/lucky-numbers-in-a-matrix/

// another answer
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    let final = [];
    for(let i = 0; i < matrix.length; i++) {
        const smallest = Math.min(...matrix[i]);
        let result = findMaxInCol(smallest, matrix[i].indexOf(smallest), matrix);
        if(result) final.push(smallest);
    }
    return final;
};

function findMaxInCol(num, tempcol, matrix) {
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][tempcol] > num) return false;
    }
    return true;
}
