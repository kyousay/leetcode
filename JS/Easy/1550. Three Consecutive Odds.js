/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {
    for(let i = 0; i < arr.length - 2; i++) {
        if(arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) return true;
    }
    return false;
};

// URL: https://leetcode.com/problems/three-consecutive-odds/

// Runtime: 60 ms, faster than 91.57% of JavaScript online submissions for Three Consecutive Odds.
// Memory Usage: 42.4 MB, less than 20.22% of JavaScript online submissions for Three Consecutive Odds.

