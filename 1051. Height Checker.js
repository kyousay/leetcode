/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let count = 0;
    let copy = [...heights];
    heights.sort((x, y) => x - y);
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== copy[i]) {
            count += 1;
        }
    }
    return count;
};

// Runtime: 76 ms, faster than 68.34% of JavaScript online submissions for Height Checker.
// Memory Usage: 39.1 MB, less than 38.77% of JavaScript online submissions for Height Checker.

// URL: https://leetcode.com/problems/height-checker/

// online
/**
 * @param {number[]} heights
 * @return {number}
 */
 const heightChecker = (heights) => [...heights].sort((x, y) => x - y).reduce((acc, cur, index) => cur !== heights[index] ? acc + 1 : acc, 0)