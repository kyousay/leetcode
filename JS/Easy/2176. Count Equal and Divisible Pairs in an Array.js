/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countPairs = function(nums, k) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j] && ((i * j) % k) === 0) {
                count++;
            }
        }
    }
    return count;
};

// URL: https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

// Runtime: 56 ms, faster than 98.98% of JavaScript online submissions for Count Equal and Divisible Pairs in an Array.
// Memory Usage: 42.7 MB, less than 49.87% of JavaScript online submissions for Count Equal and Divisible Pairs in an Array.
