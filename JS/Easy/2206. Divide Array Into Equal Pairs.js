/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] ? hash[nums[i]] += 1 : hash[nums[i]] = 1;
    }
    return Object.values(hash).every((num) => num % 2 === 0);
};

// URL: https://leetcode.com/problems/divide-array-into-equal-pairs/submissions/

// Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Divide Array Into Equal Pairs.
// Memory Usage: 44.5 MB, less than 100.00% of JavaScript online submissions for Divide Array Into Equal Pairs.