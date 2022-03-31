/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let sum = 0, max = 0, temp = nums[0];
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(!nums[i + 1] || nums[i + 1] <= nums[i]) {
         max = Math.max(sum, max);
         sum = 0;
        }
    }
    return max;
};

// URL: https://leetcode.com/problems/maximum-ascending-subarray-sum/

// Runtime: 66 ms, faster than 74.77% of JavaScript online submissions for Maximum Ascending Subarray Sum.
// Memory Usage: 42 MB, less than 58.88% of JavaScript online submissions for Maximum Ascending Subarray Sum.


// another answer1
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    var result = [], idx = 0, sum = 0;
    nums.unshift(0);
    while (idx < nums.length){
        if (nums[idx] > nums[idx-1]) {
            sum += nums[idx];
        }
        else {
            result.push(sum);
            sum = nums[idx];
        }
        idx ++;
    }
    result.push(sum);
    return Math.max(...result);
};

// Runtime: 69 ms, faster than 69.16% of JavaScript online submissions for Maximum Ascending Subarray Sum.
// Memory Usage: 42.1 MB, less than 46.73% of JavaScript online submissions for Maximum Ascending Subarray Sum.
