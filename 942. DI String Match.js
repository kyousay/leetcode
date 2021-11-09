/**
 * @param {string} S
 * @return {number[]}
 */
 var diStringMatch = function(S) {
    let max = S.length;
    let min = 0;
    const arr = new Array(S.length + 1);
    for(let i = 0; i < arr.length; i++) {
      if(S[i] === "I") {
        arr[i] = min;
        min++;
      } else {
        arr[i] = max;
        max--;
      }
    }
    return arr;
};

console.log(diStringMatch("IDID"));
// [0, 4, 1, 3, 2]

console.log(diStringMatch("III"));
// [0, 1, 2, 3]

console.log(diStringMatch("DDI"));
// [3, 2, 0, 1]

/**
 * Runtime: 92 ms, faster than 86.33% of JavaScript online submissions for DI String Match.
   Memory Usage: 42.4 MB, less than 83.45% of JavaScript online submissions for DI String Match.
 */


// URL: https://leetcode.com/problems/di-string-match/