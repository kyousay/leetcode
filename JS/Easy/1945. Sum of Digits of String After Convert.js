/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(s, k) {
    let code = '';
    for(let n of s) {
        code += n.charCodeAt() - 96;
    }
    while(k > 0) {
        let temp = 0;
        for(let i = 0; i < code.length; i++) {
            temp += Number(code[i]);
        }
        code = temp.toString();
        k--;
    }
    return code;
};

// URL: https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

// Runtime: 92 ms, faster than 48.75% of JavaScript online submissions for Sum of Digits of String After Convert.
// Memory Usage: 44.5 MB, less than 36.25% of JavaScript online submissions for Sum of Digits of String After Convert.