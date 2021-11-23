/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr.sort((x, y) => x - y);
    const set = new Set();
    for(let i = 0; i < arr.length - 1; i++) {
        set.add(arr[i] - arr[i + 1]);
    }
    return set.size === 1;
};

// Runtime: 80 ms, faster than 50.00% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
// Memory Usage: 39.9 MB, less than 61.11% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.

// URL: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

// another answer
