/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let prevRunLength = 0;
  let currRunLength = 1;
  let res = 0;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i - 1] === s[i]) {
      currRunLength += 1;
    } else {
      prevRunLength = currRunLength;
      currRunLength = 1;
    }
    // must be a substring if length of prev 0s or 1s >= curr 0s or 1s
    if (prevRunLength >= currRunLength) {
      res += 1;
    }
  }

  return res;
};

// URL: https://leetcode.com/problems/count-binary-substrings/

// Runtime: 74 ms, faster than 88.32% of JavaScript online submissions for Count Binary Substrings.
// Memory Usage: 45 MB, less than 84.89% of JavaScript online submissions for Count Binary Substrings.