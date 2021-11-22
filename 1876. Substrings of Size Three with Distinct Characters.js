/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    let count = 0;
    const set = new Set();
    for(let i = 0; i + 2 < s.length; i++) {
        set.add(s[i]);
        set.add(s[i + 1]);
        set.add(s[i + 2]);
        if(set.size === 3) {
            count += 1;
        }
        set.clear();
    }
    return count;
};

// Runtime: 79 ms, faster than 72.96% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.
// Memory Usage: 40.5 MB, less than 59.61% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.

// URL: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// another answer
var countGoodSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length - 2; ++i) {
		// compare the three values, they shouldn't be equal
        if(s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
            ++count;
        }
    }
    return count;
}

// Runtime: 75 ms, faster than 85.99% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.
// Memory Usage: 39.2 MB, less than 94.79% of JavaScript online submissions for Substrings of Size Three with Distinct Characters.