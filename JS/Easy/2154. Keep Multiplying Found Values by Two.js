/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    if(!nums.includes(original)) return original;
    return findFinalValue(nums, original * 2);
};

// URL: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// Runtime: 64 ms, faster than 90.20% of JavaScript online submissions for Keep Multiplying Found Values by Two.
// Memory Usage: 43.1 MB, less than 58.23% of JavaScript online submissions for Keep Multiplying Found Values by Two.
