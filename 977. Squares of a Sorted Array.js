/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = (nums) => nums.map(num => num*num).sort((x, y) => x - y);

//  Runtime: 104 ms, faster than 96.37% of JavaScript online submissions for Squares of a Sorted Array.
//  Memory Usage: 45.7 MB, less than 63.99% of JavaScript online submissions for Squares of a Sorted Array.

// URL: https://leetcode.com/problems/squares-of-a-sorted-array/