/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    let count = 0;
    let sum = 0;
    const arr = [];
    nums.sort((x, y) => x - y);
    for(let num of nums) {
        count += num;
    }
    for(let i = nums.length - 1; i >= 0; i--) {
        if(count >= sum) {
            count -= nums[i];
            sum += nums[i];
            arr.push(nums[i]);
        } else {
            break;
        }
    }
    return arr;
};

// Runtime: 84 ms, faster than 73.91% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.
// Memory Usage: 40.8 MB, less than 67.39% of JavaScript online submissions for Minimum Subsequence in Non-Increasing Order.

// URL: https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

// another answer

var minSubsequence = function(nums) {
    nums.sort((a, b) => b - a);
    let total = nums.reduce((a, b) => a + b), sum = 0;
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        total -= nums[i];
        res.push(nums[i]);
        if(sum > total) return res;
    }
};