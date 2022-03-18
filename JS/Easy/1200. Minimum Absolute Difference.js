/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    arr.sort((x, y) => x - y);
    let min = Infinity;
    const retVal = [];
    for(let i = 0; i < arr.length - 1; i++) {
        retVal.push([arr[i], arr[i + 1], arr[i + 1] - arr[i]]);
        min = Math.min(min, arr[i + 1] - arr[i]);
    }
    return retVal.filter(val => val[2] === min).map(val => [val[0], val[1]]);
};

// URL: https://leetcode.com/problems/minimum-absolute-difference/

// Runtime: 242 ms, faster than 39.95% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 75.2 MB, less than 5.41% of JavaScript online submissions for Minimum Absolute Difference.

// another answer
// diff < min の時にリセットするという考えがなかった。
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let left = 0, right = 1;
    let min = Infinity;
  
    while (right < arr.length) {
      const diff = arr[right] - arr[left];
      
      if (diff < min) {
        min = diff;
        result = [[arr[left], arr[right]]];
      } else if (diff === min) {
        result.push([arr[left], arr[right]]);
      }
  
      left++;
      right++;
    }
  
    return result;
  };

// Runtime: 148 ms, faster than 90.72% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 53.6 MB, less than 80.15% of JavaScript online submissions for Minimum Absolute Difference.