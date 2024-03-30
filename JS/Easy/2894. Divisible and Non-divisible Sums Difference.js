/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum = 0;
    let divisible = 0;
    for(let i = 1; i <= n; i++) {
        if(i % m === 0) {
            divisible += i;
        } else {
            sum += i;
        }
    } 
    return sum - divisible;
};
// URL: https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/

// Runtime 
// 69ms Beats 20.15% of users with JavaScript
// Memory 
// 49.80vMB Beats 50.48% of users with JavaScript

// another answer
// sumだけで計算できたが、いらない変数を宣言していた。

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if(i % m === 0) {
            sum -= i;
        } else {
            sum += i;
        }
    } 
    return sum;
};

// Runtime
// 57ms Beats 73.13% of users with JavaScript

// Memory
// 49.32MB Beats 88.20% of users with JavaScript