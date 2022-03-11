/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
 var checkAlmostEquivalent = function(word1, word2) {
    let hash1 = {};
    let hash2 = {};
    for(let i = 0; i < word1.length; i++) {
        hash1[word1[i]] ? hash1[word1[i]]++ : hash1[word1[i]] = 1;
        hash2[word2[i]] ? hash2[word2[i]]++ : hash2[word2[i]] = 1;
    }
    return Object.keys({...hash1, ...hash2}).every(key => Math.abs((hash2[key] || 0) - (hash1[key] || 0)) < 4);
};

// Runtime: 92 ms, faster than 38.14% of JavaScript online submissions for Check Whether Two Strings are Almost Equivalent.
// Memory Usage: 42.4 MB, less than 16.53% of JavaScript online submissions for Check Whether Two Strings are Almost Equivalent.

// URL: https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/