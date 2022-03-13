/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = (words, pref) => words.filter(word => word.startsWith(pref)).length;

 // URL: https://leetcode.com/problems/counting-words-with-a-given-prefix/

// Runtime: 106 ms, faster than 17.27% of JavaScript online submissions for Counting Words With a Given Prefix.
// Memory Usage: 42.3 MB, less than 95.34% of JavaScript online submissions for Counting Words With a Given Prefix.
