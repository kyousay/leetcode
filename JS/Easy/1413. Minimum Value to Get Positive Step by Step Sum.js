/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let startNum = 1, count = 1;
    while(true) {
        for(let i = 0; i < nums.length; i++) {
            count += nums[i];
            if(count < 1) break;
            if(i === nums.length -1) return startNum;
        }
        startNum++;
        count = startNum;
    }
};

// URL: https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/submissions/

// Runtime: 95 ms, faster than 32.70% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 42.2 MB, less than 33.33% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.

// another answer