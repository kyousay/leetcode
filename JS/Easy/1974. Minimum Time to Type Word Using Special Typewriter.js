/**
 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function(word) {
    let ops = 0;
    let cur = 'a';
    
    for(const char of word) {
      const diff = Math.abs(cur.charCodeAt(0) - char.charCodeAt(0));
      if(diff > 13) {
        ops += 26 - diff + 1;
      } else {
        ops += diff + 1;
      }
      
      cur = char;
    }
    
    return ops;
  };

// Runtime: 72 ms, faster than 83.00% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.
// Memory Usage: 39.6 MB, less than 36.00% of JavaScript online submissions for Minimum Time to Type Word Using Special Typewriter.

// URL: https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/