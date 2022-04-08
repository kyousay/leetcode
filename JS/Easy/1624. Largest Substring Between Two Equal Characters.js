/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1;
    for(let i = 0; i < s.length; i++) {
        const index = s.lastIndexOf(s[i]);
        if(index === -1) continue;
        res = Math.max(res, Math.abs(i - index) - 1);
    }
    return res;
};

// URL: https://leetcode.com/problems/largest-substring-between-two-equal-characters/

// Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
// Memory Usage: 42.2 MB, less than 82.28% of JavaScript online submissions for Largest Substring Between Two Equal Characters.

// another answer
var maxLengthBetweenEqualCharacters = function(s) {
    let result = -1;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            result = Math.max(result, i - map.get(s.charAt(i)))
        } else {
            map.set(s.charAt(i), i + 1);
        }
    }
    return result;
};

// Runtime: 94 ms, faster than 37.98% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
// Memory Usage: 43.1 MB, less than 26.58% of JavaScript online submissions for Largest Substring Between Two Equal Characters.