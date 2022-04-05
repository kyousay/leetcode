/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let max = 1;
    let temp = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            temp++;
        }
        if(s[i] !== s[i - 1] || i === s.length - 1) {
            max = Math.max(max, temp);
            temp = 1;   
        }
    }
    return max;
};

// URL: https://leetcode.com/problems/consecutive-characters/

// Runtime: 72 ms, faster than 78.97% of JavaScript online submissions for Consecutive Characters.
// Memory Usage: 43.2 MB, less than 41.63% of JavaScript online submissions for Consecutive Characters.

// another answer
/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    let max = 1;
    let temp = 1;
    for(let i = 1; i < s.length; i++) {
        if(s[i] === s[i - 1]) {
            temp++;
        } else {
            max = Math.max(max, temp);
            temp = 1;      
        }
    }
    return Math.max(max, temp);
};