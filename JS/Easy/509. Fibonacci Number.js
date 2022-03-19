/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n === 0 || n === 1) return n;
    return fib(n - 1) + fib(n - 2);
};

// URL: https://leetcode.com/problems/fibonacci-number/

// Runtime: 84 ms, faster than 62.32% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 41.8 MB, less than 56.06% of JavaScript online submissions for Fibonacci Number.

// フィボナッチ数列とは
// イタリアの数学者フィボナッチ(1170~1259年頃)が紹介した数列を「フィボナッチ数列」と言います。 １、１、２、３、５、８、１３、２１、３４、５５、８９、１４４、２３３、３７７… 「どの数字も前２つの数字を足した数字」という規則の数列です。
