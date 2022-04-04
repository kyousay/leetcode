/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while(true) {
        num = num.toString().split('').reduce((acc, cur) => acc += Number(cur), 0);
        if(num < 10) return num;
    }
};

// URL: https://leetcode.com/problems/add-digits/

// Runtime: 60 ms, faster than 99.52% of JavaScript online submissions for Add Digits.
// Memory Usage: 44.1 MB, less than 40.76% of JavaScript online submissions for Add Digits.

// another answer
var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

// Runtime: 64 ms, faster than 98.53% of JavaScript online submissions for Add Digits.
// Memory Usage: 43 MB, less than 93.04% of JavaScript online submissions for Add Digits.