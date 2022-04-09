/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
 var getMinDistance = function(nums, target, start) {
    let i = 0;
    while(i < nums.length) {
        if(nums[start + i] === target || nums[start - i] === target) {
            return i;
        }
        i++;
    }
};

// URL: https://leetcode.com/problems/minimum-distance-to-the-target-element/

// Runtime: 73 ms, faster than 68.57% of JavaScript online submissions for Minimum Distance to the Target Element.
// Memory Usage: 42.5 MB, less than 50.00% of JavaScript online submissions for Minimum Distance to the Target Element.

// another answer
