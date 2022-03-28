/**
 * @param {number} num
 * @return {number}
 */
// ビット否定(~)を使っても、32ビットに変換されて、ビット転換されてしまうので、任意ビットをとてくるのがきつい
 var findComplement = (num) => parseInt(num.toString(2).split('').map((n) => n == 1 ? 0 : 1).join(''), 2);

// URL: https://leetcode.com/problems/number-complement/

// Runtime: 82 ms, faster than 53.47% of JavaScript online submissions for Number Complement.
// Memory Usage: 42.2 MB, less than 50.50% of JavaScript online submissions for Number Complement.

// another answer
/**
 * @param {number} num
 * @return {number}
 */
// 最大値を取得して、それをnumで排他的論理和することで解決している
 var findComplement = function(num) {
    let maximum = 0;
    let power = 0;

    if(num === 0)
        return 1;
    while(maximum < num){

        maximum += Math.pow(2,power); // Maximum binary number
        power++
    }
    return(maximum^num);
};


// Runtime: 64 ms, faster than 85.15% of JavaScript online submissions for Number Complement.
// Memory Usage: 41.9 MB, less than 67.82% of JavaScript online submissions for Number Complement.