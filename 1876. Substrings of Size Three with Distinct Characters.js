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