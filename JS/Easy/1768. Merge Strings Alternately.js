/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let answer = '';
    const last = Math.max(word1.length, word2.length);
    let i = 0;
    while(i < last) {
        answer += (word1[i] || "");
        answer += (word2[i] || "");
        i++;
    }
    return answer;
};

// Runtime: 72 ms, faster than 86.13% of JavaScript online submissions for Merge Strings Alternately.
// Memory Usage: 40.1 MB, less than 27.17% of JavaScript online submissions for Merge Strings Alternately.

// URL: https://leetcode.com/problems/merge-strings-alternately/