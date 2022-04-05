/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    const ns = n.toString(2);
    let temp = ''
    for(let s of ns) {
        temp += s === '0' ? '1' : '0';
    }
    return parseInt(temp, 2);
};

// URL: https://leetcode.com/problems/complement-of-base-10-integer/

// Runtime: 76 ms, faster than 48.72% of JavaScript online submissions for Complement of Base 10 Integer.
// Memory Usage: 42.1 MB, less than 56.41% of JavaScript online submissions for Complement of Base 10 Integer.
