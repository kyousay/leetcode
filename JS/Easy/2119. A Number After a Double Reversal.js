/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    const numStr = num.toString();
    return numStr === Number(numStr.split('').reverse().join('')).toString().split('').reverse().join('');
};

// URL: https://leetcode.com/problems/a-number-after-a-double-reversal/

// Runtime: 96 ms, faster than 34.72% of JavaScript online submissions for A Number After a Double Reversal.
// Memory Usage: 42.1 MB, less than 47.67% of JavaScript online submissions for A Number After a Double Reversal.

// another answer
// 先頭に0が来る時にどうやって0を排除するかを考える問題だった。
// 10で割って余りが出ない場合は10, 100, 180, 150など末尾に0が来る。(末尾に0がくればfalse)
const isSameAfterReversals = (num) => {
    return num.toString().length === 1 || num % 10 !== 0
}

// Runtime: 96 ms, faster than 34.72% of JavaScript online submissions for A Number After a Double Reversal.
// Memory Usage: 42.2 MB, less than 31.87% of JavaScript online submissions for A Number After a Double Reversal.