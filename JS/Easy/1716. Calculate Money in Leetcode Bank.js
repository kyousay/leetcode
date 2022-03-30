/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    let num = 0;
    const div = Math.trunc(n / 7)
    const mod = n % 7;
    for(let i = 0; i < div; i++) {
        num += 28 + (7 * i);
    }
    for(let i = 0; i < mod; i++) {
        num += i + (div + 1);
    }
    return num;
};

// URL: https://leetcode.com/problems/calculate-money-in-leetcode-bank/

// Runtime: 68 ms, faster than 76.54% of JavaScript online submissions for Calculate Money in Leetcode Bank.
// Memory Usage: 42.2 MB, less than 34.57% of JavaScript online submissions for Calculate Money in Leetcode Bank.

