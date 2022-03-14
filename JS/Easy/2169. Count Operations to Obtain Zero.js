/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var countOperations = function(num1, num2) {
    if(num1 === 0 || num2 === 0) return 0;
    let i = 1;
    while(true) {
        if(num1 >= num2) {
            num1 -= num2;
        } else {
            num2 -= num1;
        }
        if(num1 === 0 || num2 === 0) {
            return i;
        }
        i++;
    }
};

// URL: https://leetcode.com/problems/count-operations-to-obtain-zero/submissions/

// Runtime: 52 ms, faster than 99.62% of JavaScript online submissions for Count Operations to Obtain Zero.
// Memory Usage: 42.3 MB, less than 47.18% of JavaScript online submissions for Count Operations to Obtain Zero.

// another answer
// そもそもif文でどちらかが0なことを判定しなくて良いことが盲点だった。
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var countOperations = function(num1, num2) {
    let i = 0;
    while(num1 !== 0 && num2 !== 0) {
        num1 >= num2 ? num1 -= num2 : num2 -= num1;
        i++
    }
    return i;
};

// Runtime: 76 ms, faster than 69.17% of JavaScript online submissions for Count Operations to Obtain Zero.
// Memory Usage: 41.7 MB, less than 93.61% of JavaScript online submissions for Count Operations to Obtain Zero.
