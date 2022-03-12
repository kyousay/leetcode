/**
 * @param {string} s
 * @return {string[]}
 */
 var cellsInRange = function(s) {
    const parsedValue = s.split(':');
    const [col1, row1] = parsedValue[0];
    const [col2, row2] = parsedValue[1];
    const arr = [];
    for(let i = col1.codePointAt(0); i <= col2.codePointAt(0); i++) {
        for(let j = Number(row1); j <= Number(row2); j++) {
            arr.push(String.fromCodePoint(i) + j)
        }
    }
    
    return arr;
};

// Runtime: 76 ms, faster than 89.23% of JavaScript online submissions for Cells in a Range on an Excel Sheet.
// Memory Usage: 44.8 MB, less than 55.80% of JavaScript online submissions for Cells in a Range on an Excel Sheet.

// URL: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/submissions/

// 別解
var cellsInRange = function(s) {
    let res = [], end = s.charCodeAt(3) 
    for(let j = s.charCodeAt(0); j <= end; j++){
        let char = String.fromCharCode(j)
        for(let i = s[1]; i <= s[4]; i++){
            res.push(`${char}${i}`)
        }
    }
    return res
};